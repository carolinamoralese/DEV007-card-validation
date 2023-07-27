import validator from './validator.js';


const formulario = document.getElementById("validacion-tarjeta")
formulario.addEventListener("submit", obtenerNumeroTarjeta)



function obtenerNumeroTarjeta(event){

  const numeroIngresado = document.getElementById("numero-tarjeta").value;
  const numeroEnmascarado = validator.maskify(numeroIngresado)
  const esValido = validator.isValid(numeroIngresado)
  const mensajeValido = document.getElementById("mensaje-valido")
  const mensajeInvalido = document.getElementById("mensaje-invalido")
  const numeroCifrado = document.getElementById("numero-enmascarado")
  const tituloResumen = document.getElementById("titulo-resumen")

  if(esValido === true){
    tituloResumen.innerHTML = " <b>Resumen de la transaccion<b>"
    tituloResumen.style.display="block"
    mensajeInvalido.style.display= "none"
    mensajeValido.innerHTML = "El numero de tarjea ingresado es <b>Valido</b>"
    mensajeValido.className = "valido"
    numeroCifrado.innerHTML =  numeroEnmascarado
    mensajeValido.style.display="block"
    numeroCifrado.style.display="block"
    
  }else{
    tituloResumen.style.display="none"
    numeroCifrado.style.display = "none"
    mensajeValido.style.display = "none"
    mensajeInvalido.innerHTML = "El numero de tarjea ingresado No es valido, <b>verifica la informacion ingresada </b>"
    mensajeInvalido.className= "invalido"
    mensajeInvalido.style.display="block"
  }
  event.preventDefault()
}

