class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;





   inserta_inicio(DATO){

       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////



    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }



    inserta_antes_X (DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            window.alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    } 


/////////////////////////////////////////////////////////////////////  
    inserta_despues_X ( DATO,comp){
    var P_ini=this.INICIO;
    var atras=P_ini;
    var BAND=1;
    var adelante=null;
    
    while ( atras.info!=comp && BAND==1 ){
        if(atras.liga!=null){
            atras=atras.liga;
            adelante=atras.liga;
        }
        else{
            BAND=0;
        }
    }
    
    if(BAND==1){
        if(atras==P_ini){
            var nuevo;
            var aux=P_ini.liga;
            nuevo.info=DATO;
            atras.liga=nuevo;
            nuevo.liga=aux;
        }
        else{
            var nuevo=new Nodo();
            nuevo.info=DATO;
            atras.liga=nuevo;
            nuevo.liga=adelante;
        }
    }
    else{
        window.alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
    } 

    this.INICIO=P_ini;
}


    eliminar_primer(){
    var P_ini=this.INICIO;
    if(P_ini!=null){
        var aux=P_ini;
        P_ini=P_ini.liga;
        
    }
    else{
        window.alert("EL NODO  vacio  ");
    }
    this.INICIO=P_ini;
}

eliminar_final(){
    
    var P_ini=this.INICIO;
    if(P_ini!=null){
        var aux=P_ini;
        var borrar;

        while(aux.liga!=null){
            borrar=aux;
            aux=aux.liga; 
        }
        //caso -> inicio = final 
        if(aux==P_ini){
            
            P_ini=null;
        }
        //caso normal 
        else{
            borrar.liga=null;
            
        }
    }
    else{
        
    }
    this.INICIO=P_ini;
}


    eliminar_X(comp){
    var P_ini=this.INICIO;

    if(P_ini!=null){
        var eliminar=P_ini;
        var  BAND=1;
        var atras;
        while(eliminar.info!=comp && BAND==1 ){
            if(eliminar.liga!=null){
                atras=eliminar;
                eliminar=eliminar.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            if(eliminar==P_ini){
                P_ini=P_ini.liga;
            }
            else{
                atras.liga=eliminar.liga;
            }
           
        }
        else{
            window.alert("EL NODO  NO SE ENCUENTRA ");
        }
    }
    else{
        window.alert("EL NODO  VACIO  ");
    }
    this.INICIO=P_ini;
}
///////////////////////////////////////////////////////
    eliminarDespues_X(comp){
    var P_ini=this.INICIO;
    if(P_ini!=null){
        var eliminar=P_ini;
        var BAND=1;
        var adelante=null;
        while(eliminar.info!=comp && BAND==1 ){
            if(eliminar.liga!=null){
                eliminar=eliminar.liga;
                adelante=eliminar.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            if(eliminar==P_ini){
                if(P_ini.liga!=null){
                    P_ini.liga=P_ini.liga.liga;
                }
                else{
                    window.alert("NO EXISTE UN NODO DESPUES DE ESTE")
                }
            }
            else{
                if(adelante!=null){
                    eliminar.liga=adelante.liga;
                }
                else{
                    window.alert("NO EXISTE INFO");
                }
            }
            
        }
        else{
            window.alert("NODO NO SE ENCUENTRA EN LA LISTA");
        }
    }
    else{
        window.alert("NO EXITE NINGUN NODO");
    }
}



  eliminar_antes_X( DATO){
    var P_ini=this.INICIO;
    if(P_ini.info==DATO){
        window.alert("NO ESISTE UN NODO ANTES");
    }
    else{
        var adelante=P_ini;
        var BAND=1;
        var atras;
        var aux;
        while(adelante.info!=DATO && BAND==1){
            if(adelante.liga!=null){
                aux=atras;
                atras=adelante;
                adelante=adelante.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==0){
            window.alert("NO SE ENCUENTRA EL DATO INGRESADO");
        }
        if(P_ini.liga==adelante){
            P_ini=adelante;
        }
        else{
            aux.liga=adelante;
        }
    }
    this.INICIO=P_ini;
}













/////////////////////////////////////////////////////////////

    dibujarNodos(){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva

        var x=0;
        var y=0;
        var ctd=0;				
        while(tmp!=null){
            
            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(200,0,0)";
             ctx.fillRect (x,y, 55,30);
            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }
        
    }
}