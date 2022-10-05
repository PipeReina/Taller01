function TipoTriangulo(){
    let lado1 = document.getElementById('primerLa').value;
    let lado2 = document.getElementById('segunLa').value;
    let lado3 = document.getElementById('tercerLa').value;

    if (lado1==lado2 && lado2==lado3){
        alert('El Triangulo es Equilatero 📐')
    }else if (lado1<lado2 && lado1<lado3 && lado2==lado3||lado2<lado1 && lado2<lado3 && lado1==lado3||lado3<lado1 && lado3<lado2&& lado2==lado1){
        alert('El Triangulo es Isósceles 📐')
    }else if(lado1>lado2 && lado1>lado3 ||lado2>lado1 && lado2>lado3 ||lado3>lado2 && lado3>lado1){
        alert('El Triangulo es Escaleno 📐')
    }
}