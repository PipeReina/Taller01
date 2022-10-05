
function Profes(){
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let actividad=document.getElementById('actividad').value;
    let Profe=document.getElementById('Profe');
    let Profeigual=document.getElementById('Profe=');
    let Profecheck=document.getElementById('Profecheck');

    if(nombre=="Tatiana" && apellido=="Cabrera" && actividad=="Métricas de Calidad" ||
        nombre=="Tatiana" && apellido=="Cabrera" && actividad=="FrontEnd - Framework" ||
        nombre=="Carolina" && apellido=="Forero" && actividad=="Realicacion Proyecto" ||
        nombre=="Luis" && apellido=="Baquero" && actividad=="Cultura Física" ||
        nombre=="Adriana" && apellido=="Duarte" && actividad=="Diseño FrontEnd" ||
        nombre=="Yaneth" && apellido=="Castillo" && actividad=="Gestion Ambiental" ||
        nombre=="Fernando" && apellido=="Galindo" && actividad=="Bases de Datos II" ||
        nombre=="Jonathan" && apellido=="Espitia" && actividad=="BackEnd - Framework"){

            Profe.textContent=nombre+' '+apellido+' '+actividad;
            Profeigual.textContent= '=';
            Profecheck.textContent='🥳✅';
        }else{
            Profe.textContent=nombre+' '+apellido+' '+actividad;
            Profeigual.textContent= '=';
            Profecheck.textContent='🙈🚫';
        }
}