// Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o let en la declaración.
// let nombre = 'Homero';
// let apellido = 'Simpson';
// let edad = 37;

// Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

// const ciudad1 = 'Barcelona';
// const ciudad2 = 'Madrid';
// const ciudad3 = 'Cordoba';
// const ciudad4 = 'Buenos Aires'
// const ciudad5 = 'New York';

// Declarar variables para representar la información de un carnet de conducir.
// Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

// let nombre = '';
// let fechaDeNacimiento = '';
// let direccion = '';
// let dni = '';

// let carnet = '- Nombre: ' + nombre +
//             '- Fecha de nacimiento: ' + fechaDeNacimiento +
//             '- Dirección: ' + direccion +
//             '- DNI: ' + dni; 

// Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. 
// Luego, concatenar dichas entradas y efectuar una salida por alerta.

// let nombre1 = prompt('Ingresar nombre del primer integrante');
// let nombre2 = prompt('Ingresar nombre del segundo integrante');
// let nombre3 = prompt('Ingresar nombre del tercer integrante');
// let nombre4 = prompt('Ingresar nombre del cuarto integrante');
// let nombre5 = prompt('Ingresar nombre del quinto integrante');

// let todosLosNombres = ' Hijo: ' + nombre1 +
//                         ' Hija: ' + nombre2 +
//                         ' Padre: ' + nombre3 +
//                         ' Madre: ' + nombre4 +
//                         ' Abuela: ' + nombre5;
//             alert(todosLosNombres);

// Solicitar al usuario uno o más precios.
// Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

// let precio = Number(prompt('Ingresar precio: '))

// let descuento20 = precio * 0.2;
// let descuento30 = precio * 0.3;

// console.log(descuento20);
// console.log(descuento30);

// Solicitar al usuario un (1) nombre.
// Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
// Caso contrario, la salida será “Yo no fui”.

// let entrada = prompt('Ingrese un nombre: ');
// let nombre2 = 'bart';
// if (entrada == nombre2){
//     alert('Fui yo')
// } else{
//     alert('Yo no fui')
// }

// Solicitar al usuario una (1) tecla.
// Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. 
// Caso contrario, la salida será “Error”.

// let tecla = prompt('Ingrese una tecla: ');
// if ((tecla == 'y') || (tecla == 'Y')) { 
//     alert('CORRECTO');
// } else {
//     alert ('ERROR');
// }

// let entrada2 = prompt("INGRESAR UN  TECLA");
// if ((entrada2 == "y") || (entrada2 == "Y")) {
//     alert("CORRECTO");
// } else {
//     alert("ERROR");
// }

// Solicitar al usuario un (1) número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 

// let numero = parseInt(prompt('Ingrese un numero:'));

// if (numero == 1){
//     alert('Elegiste a Homero');
// }
// if (numero == 2){
//     alert('Elegiste a Marge');
// }
// if (numero == 3){
//     alert('Elegiste a Bart');
// }
// if (numero == 4){
//     alert('Elegiste a Lisa');
// }

// Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

// let numero = parseInt(prompt('Ingrese un numero:'))

// if ((numero >= 0) && (numero <= 1000 )) {
//     alert('Presupuesto bajo')
// } else if ((numero >= 1001) && (numero <= 3000 )) {
//     alert('Presupuesto medio')
// } else if (numero >= 3001){
//     alert('Presupuesto alto')
// } else {
//     alert('Error')
// }

// Solicitar al usuario cuatro (4) productos de almacén. 
// Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
// Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let producto1 = prompt('¿Que desea comprar?');
// let producto2 = prompt('¿Que desea comprar?');
// let producto3 = prompt('¿Que desea comprar?');
// let producto4 = prompt('¿Que desea comprar?');

// if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')) {
//     let productos = '1) '+producto1+' 2) '+producto2+' 3) '+producto3+' 4) '+producto4;
//     alert(productos);
// } else {
//     alert('Debe elegir cuatro productos.');
// }

// Solicitar al usuario un (1) un número y un (1) texto. 
// Efectuar una salida por alerta con el mensaje ingresado por cada repetición, 
// hasta alcanzar el valor señalado por el usuario.

// let numero = parseInt(prompt('Ingrese un numero de repeticiones:'));
// let texto = prompt('Ingrese un texto para repetir:');

// for (let i = 0; i < numero; i++) {
//     alert(texto);
    
// }
