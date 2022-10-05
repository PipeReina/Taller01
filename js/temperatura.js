


function enviar(){
    
    let valor= parseFloat(document.getElementById('valor').value);
    let empieza=document.getElementById('primer').value;
    let termina=document.getElementById('segun').value;
    let resultado1=document.getElementById('resultadoTempe1');
    let resultado2=document.getElementById('resultadoTempe2');
    let resultado3=document.getElementById('resultadoTempe3');
    switch(empieza){
        case "Kelvin":
            switch(termina){
                case"Kelvin":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    resultado3.textContent=valor+" "+termina;
                    alert(valor+' '+empieza+' = '+valor+' '+termina)
                break;
                case"Fahrenheit":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoKF=  1.8*(valor - 273.15) + 32;
                    resultado3.textContent=resultadoKF.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoKF+' '+termina)
                break;
                case"Celsius":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoKC=   valor-273.15;
                    resultado3.textContent=resultadoKC.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoKC+' '+termina)
                break;
            }
        break;
        case "Fahrenheit":
            switch(termina){
                case"Kelvin":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoFK= 5/9*(valor - 32) + 273.15;
                    resultado3.textContent=resultadoFK.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoFK+' '+termina)
                break;
                case"Fahrenheit":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    resultado3.textContent=valor+" "+termina;
                    alert(valor+' '+empieza+' = '+valor+' '+termina)
                    break;
                    case"Celsius":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoFC=(valor-32)/ 1.8;
                    resultado3.textContent=resultadoFC.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoFC+' '+termina)

                break;
            }
        break;
        case "Celsius":
            switch(termina){
                case"Kelvin":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoCK= valor + 273.15;
                    resultado3.textContent=resultadoCK.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoCK+' '+termina)
                break;
                case"Fahrenheit":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    let resultadoCF= valor* 1.8 + 32;
                    resultado3.textContent=resultadoCF.toFixed(2)+" "+termina;
                    alert(valor+' '+empieza+' = '+resultadoCF+' '+termina)
                    break;
                    case"Celsius":
                    resultado1.textContent=valor+" "+empieza;
                    resultado2.textContent="="
                    resultado3.textContent=valor+" "+termina;
                    alert(valor+' '+empieza+' = '+valor+' '+termina)
                    break;
            }
        break;
    }
}
