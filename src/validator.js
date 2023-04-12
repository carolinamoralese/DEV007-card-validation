const validator = {

  isValid(creditCardNumber){
    //
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
