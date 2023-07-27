const validator = {

  isValid(creditCardNumber){
   
    //convertir numero de tarjeta en array
    const arrayNumeroTarjeta = creditCardNumber.split('');
    
    //convertir array en orden inverso
    arrayNumeroTarjeta.reverse()

    //mirar las posiciones si son pares o no
    let sumaPar = 0
    let sumaImpar = 0
    let sumaTotal = 0
    for (let i = 0; i < arrayNumeroTarjeta.length; i++) {
      
      if((i+1) % 2 === 0 ) {
        
        const numeroMultiplicado = arrayNumeroTarjeta[i] * 2
       
        if(numeroMultiplicado >= 10){
          const stringNumeroMultiplicado = numeroMultiplicado.toString()
          const arrayNumeroMultiplicado = stringNumeroMultiplicado.split('');
          
          sumaPar += parseInt(arrayNumeroMultiplicado[0]) + parseInt(arrayNumeroMultiplicado[1])
          
        }else{
          sumaPar = sumaPar + numeroMultiplicado 
        }
        
      }else{
        sumaImpar += parseInt(arrayNumeroTarjeta[i])
       
      }
      
    }
    console.log(sumaPar) 
    console.log(sumaImpar)
    sumaTotal = sumaPar + sumaImpar
  
    const resultado = sumaTotal % 10
  
    
    if(resultado === 0){
      return true
    }else{
      return false
    }
  },

  maskify(creditCardNumber){
    creditCardNumber = creditCardNumber.toString()
    let numeroEnmascarado = ""
    for (let i = 0; i < creditCardNumber.length; i++){
      if(i < (creditCardNumber.length - 4)) {
        numeroEnmascarado = numeroEnmascarado + "#"
      }else {
        numeroEnmascarado = numeroEnmascarado + creditCardNumber[i]
      }
   
    }
    
    return numeroEnmascarado
   
  },

};

export default validator;
