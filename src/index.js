import validator from './validator.js';

//console.log(validator);


const numeroTarjeta = document.getElementById("enviar")
numeroTarjeta.addEventListener("click", obtenerNumeroTarjeta)

function obtenerNumeroTarjeta (){
    let numeroIngresado = document.getElementById("numero-tarjeta").value;
  

    //console.log(numeroIngresado)

    let numeroEnmascarado = validator.maskify(numeroIngresado)
    console.log(numeroEnmascarado)
  
    let esValido = validator.isValid(numeroIngresado)
    console.log(esValido)
 
   //labelCard.innerHTML =  "El número de tarjeta ingresado es <b>¡Válido!</b>";
   //if(esValido === true) {
    //labelCard.innerHTML =  "El número de tarjeta ingresado es <b>¡Válido!</b>";
   // }


}

