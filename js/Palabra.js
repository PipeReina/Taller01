function cerrarPA(){
    document.getElementById('divModal').classList.add('divModal');
    document.getElementById('divModal').classList.remove('divModal-activo');
    document.getElementById('modal').classList.add('modal-close');
    document.getElementById('modal').classList.remove('modal');   
}
const abrirPA=(e)=> {
    document.getElementById('divModal').classList.remove('divModal');
    document.getElementById('divModal').classList.add('divModal-activo');
    document.getElementById('modal').classList.remove('modal-close');
    document.getElementById('modal').classList.add('modal');
    let peticion=document.getElementById('peticion'); 
    let peti= document.getElementById('palabra').value;
    function nulo(){
        peticion.style.setProperty("font-size","40px")
        peticion.textContent='Palabra deve tener de 0 a 10 caracteres';
    }
     switch(e){
         case "largo":
            if(peti.length>1 && peti.length<10){
                peticion.textContent='"'+peti.length+'"'

           }else{
               nulo();
           }
         break;
         case "Meyus":
            if(peti.length>1 && peti.length<10){
                 peticion.textContent='"'+peti.toUpperCase()+'"'
           }else{
               nulo();

           }
             break;
         case "Minus":
            if(peti.length>1 && peti.length<10){
            peticion.textContent='"'+peti.toLowerCase()+'"'

           }else{
               nulo();
           }
         break;
         case "Primer":
            if(peti.length>1 && peti.length<10){
                 let petici=peti[0];
                peticion.textContent='"'+peti[0]+'"';
            }else{
               nulo();

            }
         break;
    }
 }
