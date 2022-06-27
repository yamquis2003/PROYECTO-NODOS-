import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        lista.canvas=canvas;//despues contructor			
    }
    
    var DATO = window.prompt("ingrese valor de nodo");
    lista.inserta_inicio(DATO);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}////////////////////////////////////////////////////////
export function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de nodo");
    lista.inserta_final(DATO);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}//////////////////////////////////////////////////////////
export function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de DATO");
    var X = window.prompt("ingrese valor de X");
    lista.inserta_antes_X(DATO,X);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////

export function inserta_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    var DATO = window.prompt("ingrese valor de DATO");
    var comp = window.prompt("ingrese valor de comp");
    lista.inserta_despues_X(DATO,comp);
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////


export function  eliminarPrimer(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    
    lista.eliminar_primer();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////

export function  eliminarFinal(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    
    lista.eliminar_final();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////


export function  eliminar_XX(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    var comp = window.prompt("ingrese valor de nodo");
    lista.eliminar_X(comp);
    
    
    
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
export function  eliminar_DESPUES(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    var comp = window.prompt("ingrese valor de nodo");
    lista.eliminarDespues_X(comp);
    
    
    
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
export function  eliminar_antes_XX(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    var DATO = window.prompt("Ingrese valor de nodo");
    lista.eliminar_antes_X(DATO);
    
    
    
    lista.dibujarNodosLog();	
    lista.dibujarNodos();

}/////////////////////////////////////////////////////////
