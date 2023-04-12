import validator from './validator.js';

//console.log(validator);


const numeroTarjeta = document.getElementById("enviar")
numeroTarjeta.addEventListener("click", obtenerNumeroTarjeta)

function obtenerNumeroTarjeta (){
    let numeroIngresado = document.getElementById("numero-tarjeta").value;
    //console.log(numeroIngresado)
    //let esValido = validator.isValid(numeroIngresado)
    //console.log(esValido)

    let numeroEnmascarado = validator.maskify(numeroIngresado)
    console.log(numeroEnmascarado)
  
}

