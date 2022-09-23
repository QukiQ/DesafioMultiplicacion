let factorial_numero = (x) =>{
    let resultado = 1;
    for(let i=1; i<=x ; i++){
        resultado = resultado * i;
        document.write(`Factorial de ${i} es: ${resultado}<br>`);
    }
}


let multiplicacion_numero = (x) =>{
    for(let i=1; i<=x ; i++){
        document.write(`${i} x ${x} = ${i*x}<br>`);
    }
}


let validacion = () => {
    do {
        var numero =  prompt("Ingrese un numero entre 1 y 20.");
        var rango = /^(0?[1-9])|([1][0-9])|20 $/;
        
        if(numero.match(rango)) {
            alert('Numero ingresado correctamente.');
        }
        else {
            alert('Numero invalido.');      
        }

    }while (!numero.match(rango));
    return numero; 
}

let operar = () =>{
    var numero = parseInt(validacion()); 
    multiplicacion_numero(numero);
    factorial_numero(numero);
}