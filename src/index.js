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
 
let mensajeValido = document.getElementById("mensaje-valido")
let mensajeInvalido = document.getElementById("mensaje-invalido")
let numeroCifrado = document.getElementById("numero-enmascarado")
if(esValido === true){
    mensajeInvalido.style.display= "none"
    mensajeValido.innerHTML = "El numero de tarjea ingresado es <b>Valido</b>"
    mensajeValido.className = "valido"
    numeroCifrado.innerHTML =  numeroEnmascarado
    mensajeValido.style.display="block"
    numeroCifrado.style.display="block"
 
}else{
    numeroCifrado.style.display = "none"
    mensajeValido.style.display = "none"
    mensajeInvalido.innerHTML = "El numero de tarjea ingresado No es valido, <b>verifica la informacion ingresada </b>"
    mensajeInvalido.className= "invalido"
    mensajeInvalido.style.display="block"
    
}

   


}

