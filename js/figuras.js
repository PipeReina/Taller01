
    // ---------------Figuras-----------------

// ------------abrir Modales------


        function abrir1(){
            document.getElementById('divModal').classList.remove('divModal');
            document.getElementById('divModal').classList.add('divModal-activo');
            document.getElementById('modal').classList.remove('modal-close');
            document.getElementById('modal').classList.add('modal');
        };

        function cerrar(){
            document.getElementById('divModal').classList.add('divModal');
            document.getElementById('divModal').classList.remove('divModal-activo');
            document.getElementById('modal').classList.add('modal-close');
            document.getElementById('modal').classList.remove('modal');   
 }
 const abrir=(e)=> {
    document.getElementById('divModal').classList.remove('divModal');
    document.getElementById('divModal').classList.add('divModal-activo');
    document.getElementById('modal').classList.remove('modal-close');
    document.getElementById('modal').classList.add('modal');
     switch(e){
         case "cuadrado":
              document.getElementById('div1').classList.add('modalTextCuadrado');
              document.getElementById('div1').classList.remove('modalTextCuadrado-inactivo');
              document.getElementById('div2').classList.add('modalTextCirculo-inactivo');
              document.getElementById('div3').classList.add('modalTextTriangulo-inactivo');
              document.getElementById('div4').classList.add('modalTextRectangulo-inactivo');
             console.log("Cuadrado:v")
            
         break;
         case "circulo":
            document.getElementById('div2').classList.add('modalTextCirculo');
            document.getElementById('div2').classList.remove('modalTextCirculo-inactivo');
            document.getElementById('div1').classList.add('modalTextCuadrado-inactivo');
            document.getElementById('div3').classList.add('modalTextTriangulo-inactivo');
            document.getElementById('div4').classList.add('modalTextRectangulo-inactivo');
           console.log("Circulo:v")
         break;
         case "triangulo":
            document.getElementById('div3').classList.add('modalTextTriangulo');
            document.getElementById('div3').classList.remove('modalTextTriangulo-inactivo');
            document.getElementById('div1').classList.add('modalTextCuadrado-inactivo');
            document.getElementById('div2').classList.add('modalTextCirculo-inactivo');
            document.getElementById('div4').classList.add('modalTextRectangulo-inactivo');
           console.log("Triangulo:v")
         break;
         case "rectangulo":
            document.getElementById('div4').classList.add('modalTextRectangulo');
            document.getElementById('div4').classList.remove('modalTextRectangulo-inactivo');
            document.getElementById('div1').classList.add('modalTextCuadrado-inactivo');
            document.getElementById('div3').classList.add('modalTextTriangulo-inactivo');
            document.getElementById('div2').classList.add('modalTextCirculo-inactivo');
           console.log("Rectangulo:v")
         break;
    }
 }

        function limpiar(){
            document.getElementById('divModal').reset;
        }

        // calcular cuadrado
        function cuadrado(){
            let numCuadrado=parseFloat(document.getElementById('numberCuadrado').value);
            let MostrarArea=document.getElementById('Area')
            let MostrarPeri=document.getElementById('Peri')
            if(numCuadrado>0){
                let totalArea=numCuadrado*numCuadrado;
                let totalPeri=numCuadrado+numCuadrado+numCuadrado+numCuadrado;
                
                let medi=document.getElementById('medicion').value
    
                switch(medi){
                    case"cm":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"cm²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"cm";
                    break;
                    case"m":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"m²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"m";
                    break;
                    case"km":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"km²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"km";
                    break;
                }
            }else{
                MostrarArea.textContent="Ingresa por xafor un numero";
                MostrarPeri.textContent="mayor a 0";
            }
        }
        function circulo(){
            let numCirculo=parseFloat(document.getElementById('numberCirculo').value);
            let MostrarArea=document.getElementById('AreaCir')
            let MostrarPeri=document.getElementById('PeriCir')
            let PI = Math.PI
            if(numCirculo>0){

                let totalArea= PI*(numCirculo*numCirculo);
                let totalPeri= (2*PI)*numCirculo;
                let medi=document.getElementById('medicionCir').value
    
                switch(medi){
                    case"cm":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"cm²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"cm";
                    break;
                    case"m":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"m²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"m";
                    break;
                    case"km":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"km²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"km";
                    break;
                }
            }else{
                MostrarArea.textContent="Ingresa por xafor un numero";
                MostrarPeri.textContent="mayor a 0";
            }
        }

        function triangulo(){
            let numTriangulo=parseFloat(document.getElementById('numberTriangulo').value);
            let numTriangulo2=parseFloat(document.getElementById('numberTriangulo2').value);
            let numTriangulo3=parseFloat(document.getElementById('numberTriangulo3').value);
            let MostrarArea=document.getElementById('AreaTri');
            let MostrarPeri=document.getElementById('PeriTri');
            if(numTriangulo>0){

                let totalArea= (numTriangulo*numTriangulo2)/2;
                let totalPeri= numTriangulo3+numTriangulo3+numTriangulo3;
                let medi=document.getElementById('medicionTri').value;
    
                switch(medi){
                    case"cm":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"cm²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"cm";
                    break;
                    case"m":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"m²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"m";
                    break;
                    case"km":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"km²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"km";
                    break;
                }
            }else{
                MostrarArea.textContent="Ingresa por xafor un numero";
                MostrarPeri.textContent="mayor a 0";
            }
        }
        function rectangulo(){
            let numRec=parseFloat(document.getElementById('numberRec').value);
            let numRec2=parseFloat(document.getElementById('numberRec2').value);
            let numRec3=parseFloat(document.getElementById('numberRec3').value);
            let numRec4=parseFloat(document.getElementById('numberRec4').value);
            let MostrarArea=document.getElementById('AreaRec');
            let MostrarPeri=document.getElementById('PeriRec');
            if(numRec>0){

                let totalArea= (numRec*numRec2);
                let totalPeri= (numRec3+numRec4)*2;
                let medi=document.getElementById('medicionRec').value;
    
                switch(medi){
                    case"cm":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"cm²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"cm";
                    break;
                    case"m":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"m²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"m";
                    break;
                    case"km":
                        MostrarArea.textContent="El area es de "+totalArea.toFixed(2)+"km²";
                        MostrarPeri.textContent="El Perimetro es de "+totalPeri.toFixed(2)+"km";
                    break;
                }
            }else{
                MostrarArea.textContent="Ingresa por xafor un numero";
                MostrarPeri.textContent="mayor a 0";
            }
        }
        