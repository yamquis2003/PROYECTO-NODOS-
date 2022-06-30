import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';
let lista=null;

////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////








export async function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        lista.canvas=canvas;//despues contructor			
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null|| DATO=='')
        return;

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO  YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////








export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }

    var DATO = await bootbox_prompt("Ingrese valor Dato");
    if(DATO==null|| DATO=='')
        return;

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

            lista.inserta_final(DATO);
            lista.dibujarNodosLog();	
            lista.dibujarNodos(DATO);

    }catch(e){

        await bootbox_alert(e.message);
    }


}//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////





export async function  insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }

   try{

    if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
    }
    
    var DATO = await bootbox_prompt("ingrese valor de DATO");
    var X = await bootbox_prompt("ingrese valor de X");

    if(DATO==null|| DATO=='')
            return;

    if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

    lista.inserta_antes_X(DATO,X);
    lista.dibujarNodosLog();	
    lista.dibujarNodos(DATO);
    
}catch(e){

    await bootbox_alert(e.message);
}





}/////////////////////////////////////////////////////////









export async function inserta_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

    var DATO = await bootbox_prompt("Ingrese valor de DATO");
    var comp = await bootbox_prompt("Ingrese valor de X");


    if(DATO==null|| DATO=='')
            return;

    if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");




    lista.inserta_despues_X(DATO,comp);
    lista.dibujarNodosLog();	
    lista.dibujarNodos(DATO);


}catch(e){

    await bootbox_alert(e.message);
}


}/////////////////////////////////////////////////////////








export  async function  eliminarPrimer(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_primer();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    

        await bootbox_alert("NODO INICIO  ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////












export async function  eliminarFinal(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    

    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }


        
        lista.eliminar_final();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    
       

        await bootbox_alert("NODO FINAL ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }





    

}/////////////////////////////////////////////////////////












export async function  eliminar_XX(){

    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }

    var comp = await bootbox_prompt("Ingrese dato a eliminar");
      
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        

        
        lista.eliminar_X(comp);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    
       

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }


}/////////////////////////////////////////////////////////








export async function  eliminar_DESPUES(){
    
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = await bootbox_prompt("Ingrese un dato para poder eliminar el dato despues ");
      

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

       
        
        
        lista.eliminarDespues_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    
       

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }


}/////////////////////////////////////////////////////////









export async function  eliminar_antes_XX(){
   
   


    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = await bootbox_prompt("Ingrese un dato para poder eliminar el dato antes ");
      

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

     
        
        
        lista.eliminar_antes_X(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    
    
       

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }









}/////////////////////////////////////////////////////////
