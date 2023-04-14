const validator = {

  isValid(creditCardNumber){
   
    //convertir numero de tarjeta en array
    let arrayNumeroTarjeta = creditCardNumber.split('');
    console.log(arrayNumeroTarjeta)
    
    //convertir array en orden inverso
    arrayNumeroTarjeta.reverse()
    console.log(arrayNumeroTarjeta)

    //mirar las posiciones si son pares o no
    let sumaPar = 0
    let sumaImpar = 0
    let sumaTotal = 0
    for (let i = 0; i < arrayNumeroTarjeta.length; i++) {
      
      if((i+1) % 2 == 0 ) {
        
      
        let numeroMultiplicado = arrayNumeroTarjeta[i] * 2
       
        if(numeroMultiplicado >= 10){
          let stringNumeroMultiplicado = numeroMultiplicado.toString()
          let arrayNumeroMultiplicado = stringNumeroMultiplicado.split('');
          console.log(parseInt(arrayNumeroMultiplicado[0]) + parseInt(arrayNumeroMultiplicado[1]))
         
          sumaPar += parseInt(arrayNumeroMultiplicado[0]) + parseInt(arrayNumeroMultiplicado[1])
          
        }else{
          sumaPar = sumaPar + numeroMultiplicado 
        }
        
      }else{
        console.log(parseInt(arrayNumeroTarjeta[i]))
        sumaImpar += parseInt(arrayNumeroTarjeta[i])
       
      }
      
    }
    sumaTotal = sumaPar + sumaImpar
    


    let resultado = sumaTotal % 10
    
    if(resultado == 0){
      return true
    }else{
      return false
    }
  },

  maskify(creditCardNumber){
    creditCardNumber = creditCardNumber.toString()
   let numeroEnmascarado = ""
    for (let i = 0; i < creditCardNumber.length; i++) {
    
      if(i < 12) {
        numeroEnmascarado = numeroEnmascarado + "#"
      }else {
        numeroEnmascarado = numeroEnmascarado + creditCardNumber[i]
      
      }
      
    }
    return numeroEnmascarado
  },

};

export default validator;
