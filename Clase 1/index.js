// comentarion de una sola linea

/* 
comentario
de
varias
lineas
*/
/* 
let numeroUno = 4;
let numeroDos = 6;

let resultadoSuma = numeroUno + numeroDos + " es el resultado";

console.log(resultadoSuma); */



// let edad; //declaracion de una variable recomendada
// edad = 16; //asignacion de una variable

// var nombre = "andres"; //decalaracion de una variable no recomendada
// var apellido = 'ruiz';

// const CURSO = "JavaScript";

// console.log("este es el valor de la variable", edad);

// nombreBonitoGrande => CamelCase
// nombre_bonito_grande => SnakeCase
// NombreBonitoGrande => PascalCase

// let numeroUno = 4;
// let numeroDos = 6;

// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;

// console.log("el resultado de la suma es: ", resultadoSuma);
// console.log("el resultado de la resta es: ", resultadoResta);

// let saludo = "Hola";
// let nombre = "Camila";

// let saludoCompleto = saludo + " " + nombre;
// console.log(saludoCompleto);
/* 
 let nombre = prompt("Ingrese su nombre");
alert("el nombre de la persona es " + nombre); */

// let nombre = prompt("Ingrese su nombre");
// alert("el nombre de la persona es " + nombre);

// let edad = 56;
// let nombre = "mariano";

// console.log(typeof(edad));
// console.log(typeof(nombre));

/* let variable = parseFloat(prompt("Ingrese algo"));
alert(typeof(variable)); */


//let entrada = prompt("ingrese una letra");
//let salida = entrada + " " + "ingresada";
//alert(salida);
//console.log(entrada);

let entradaNombre = prompt("ingrese su nombre")
let entradaApellido = prompt("Apellido");
let entradaEdad = prompt("Edad");

let salida = "Hola" + " " +  entradaNombre +  " " + entradaApellido;
let salida2 = "sabemos que tienes " + entradaEdad + "años";
let sumaEdad = 10;
let salida3 = "en 10 años terndras" + parseInt(entradaEdad) + parseInt(sumaEdad); 

console.log(salida3);

alert(salida);
alert(salida2);
alert(salida3);
