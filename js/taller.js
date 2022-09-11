
let total;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let numFinal;
let operacion;

function ini(){
    // variables Calculadora
    let resul=document.getElementById('resul'); 
    let uno=document.getElementById('uno'); 
    let dos=document.getElementById('dos'); 
    let tres=document.getElementById('tres'); 
    let cuatro=document.getElementById('cuatro'); 
    let cinco=document.getElementById('cinco'); 
    let seis=document.getElementById('seis'); 
    let siete=document.getElementById('siete'); 
    let ocho=document.getElementById('ocho'); 
    let nueve=document.getElementById('nueve'); 
    let cero=document.getElementById('cero'); 
    let mas=document.getElementById('mas'); 
    let menos=document.getElementById('menos'); 
    let multi=document.getElementById('multi'); 
    let divi=document.getElementById('divi'); 
    let borrar=document.getElementById('borrar'); 
}

    // Eventos Calculadora
    uno.onclick=function(Calculadora){
        resul.textContent = resul.textContent+"1";
    }
    dos.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"2";
    }
    tres.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"3";
    }
    cuatro.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"4";
    }
    cinco.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"5";
    }
    seis.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"6";
    }
    siete.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"7";
    }
    ocho.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"8";
    }
    nueve.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"9";
    }
    cero.onclick=function(Calculadora){
        resul.textContent=resul.textContent+"0";
    }
    borrar.onclick=function(Calculadora){
        borrarTodo();
    }
    mas.onclick=function(Calculadora){

        num1=resul.textContent;
        operacion="+";
        limpiar();
        
    }
    multi.onclick=function(Calculadora){
        num1=resul.textContent;
        operacion="*";
        limpiar();
    }
    divi.onclick=function(Calculadora){
        num1=resul.textContent;
        operacion="/";
        limpiar();
    }
    menos.onclick=function(Calculadora){
        num1=resul.textContent;
        operacion="-";
        limpiar();
    }
    igual.onclick=function(Calculadora){
        numFinal=resul.textContent;
        resolver();
    }

    function limpiar(){
        resul.textContent="";
    }

    function borrarTodo(){
        resul.textContent="";
        num1=0;
        num2=0;
        num3=0;
        num4=0;
        num5=0;
        num6=0;
        num7=0;
        num8=0;
        num9=0;
        numfinal=0;
        operacion=""
    }
    
    function resolver(){
        let rest =0;
        switch(operacion){
            case"+":
                rest=parseFloat(num1)+
                parseFloat(numFinal)
            break
            case"-":
                rest=parseFloat(num1)-
                parseFloat(numFinal)
            break
            case"*":
                rest=parseFloat(num1)*
                parseFloat(numFinal)
            break
            case"/":
                rest=parseFloat(num1)/
                parseFloat(numFinal)
            break
        }

        limpiar();
        resul.textContent=rest
    }




  