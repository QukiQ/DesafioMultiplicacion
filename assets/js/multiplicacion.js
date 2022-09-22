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
        let numero =  parseInt(prompt("Ingrese un numero entre 1 y 20."));
        if(numero<1 || numero>20){
            alert("Numero fuera de rango.");
        }
    }while (numero<1 || numero>20);
    return numero; 
}

let operar = () =>{
    var numero = parseInt(validacion()); 
    multiplicacion_numero(numero);
    factorial_numero(numero);
}