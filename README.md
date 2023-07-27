# Tarjeta de crédito válida

## Acerca del proyecto 
Card Validation se creo como ultimo paso para terminar el proceso de pago de una factura de servicios publicos, en esta aplicacion Web se busca validar que el numero de tarjeta ingresada por el usuario sea valida y para esto se implemento el codigo Luhn.

El codigo de Luhn es un algoritmo que verifca si la tarjeta es valida o no, tambien se agregaron espacios donde el usuario debe de ingresar la informacion del dueño de la tajrta como lo es el digito de verificacion de la tarjeta, datos personales del titular de la tarjeta (nombre que debe coincidir con la tarjeta, numero de celular del titular, tipo de documento, numero de documento y correo electronico), tambien se realizaron campos para que el usuario digite la fecha de vencimiento de la tarjeta.

Adicionalmente se incluyeron dos opciones donde el usuario autorizar si se utiliza la tarjeta para futuros pagos o programar pago automatico del servicio(estas opciones no son obligatorias para termniar con el proceso del pago).

Por ultimo el usuario debe dar clic en el boton "Pagar", al dar clic se ejecuta la funcion que valida el si el tipo de tarjta es valida o invalida, llegado el caso que la tajeta sea valida le va a mostrar al usuario con letras en color verde el siguient texto: "El numero de tarjeta ingresado es valido" y mostrara el numero de tarjeta ingresado pero ocultado los primeros 12 digitos y mostrando los ultuimos 4 digitos; de lo contrario saldra el siguiente mensaje con letras de color rojo "El numero de tarjeta ingresado no es valido, verifica la informacion ingresada".

### Proceso de implementación personal
Principalmente me enfoque en entender bien cuales eran los requerimientos del proyecto para definir bien lo que se debia desarrollar, luego de tener claro definí una estructura basica de HTML para obtener el numero de la tarjeta y ya obteniendo este valor mi enfoque principal estuvo en el codigo javascript, realizando la implementacion de las funciones `isValid` y `maskify` del objeto `validator`. Para realizar esa implementacion me apoye en el material suministrado tanto como documentos como videos. 

Luego de realizar la implementacion de los metodos y que pasara todas las pruebas, me enfoque en el codigo HTML y CSS para darle un mejor diseño al formulario pensando en la usabilidad del usuario. 

El diseño se baso en una pagina de pago, donde utiliza colores muy neutros ya que esta esta dirigida a todo tipo de usuario y se busca que los usuarios se sientan comodos y visulamente no se sienta cargada



## .Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar
Project Feedback:

* [X] Tiene una interfaz que permite a la usuaria saber si la tarjeta es valido
  y ocultar el numero hasta las 4 ultimos digitos.
* [X] El proyecto será entregado incluyendo pruebas unitarios de los métodos de
  `validator` (`isValid` y `maskify`).
* [X] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [X] El proyecto será entregado subiendo tu código a GitHub.
* [X] La interfaz será "desplegada" usando GitHub Pages.
* [X] El README contiene una definición del producto.
