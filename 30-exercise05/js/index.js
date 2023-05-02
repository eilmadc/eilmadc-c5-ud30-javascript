console.log("--- EJERCICIO 1 ----")
/* Imprimo por consola del navegador el mensaje:  Hola Mundo*/
console.log("Hola Mundo!");
/* Imprimo por consola del navegador el mensaje:  Soy el primer Script*/
console.log("Soy el primer script");

console.log("--- EJERCICIO 2 ----")
/*Guardo los mensajes del console log en variables,
y los muestro en un alert */
let mensaje1 = "Hola Mundo!";
let mensaje2 = '\nQué fácil es incluir \'comillas simples\' \n y "comillas dobles" ';
alert(mensaje1 + mensaje2);

console.log("--- EJERCICIO 3 ----")
/* Creacion de un array llamado meses que almacena el nombre de los doce meses del año*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'May', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/* Imprimo por consola del navegador los meses*/
console.log("MESES DEL AÑO");
for (let i = 0; i < meses.length; i++) {
    console.log( 'Mes '+ (i+1)+': '+meses[i]);
}

console.log("--- EJERCICIO 4 ----")
/* 4 : Array de valores con diferentes tipos de datos*/
var valores = [true, 5 , false, "hola","adios",2];
/* 4: 1. Determina cual es el elemento de texto mayor */
/* 4: 2. Utilizar operaciones con los valores booleanos para determinnar true y false */
if((valores[3].length>valores[4].length)===valores[0]) {
    console.log("El elemento 3 es mayor que el elemento 4");
    console.log("Por tanto es " + valores[0]);
} else{
    console.log("El elemento 3 es menor que el elemento 4");
    console.log("Por tanto es " + valores[2]);
}
/* 4: 3. Determina resultado de 5 operaciones numéricas con dos elementos numéricos */
var num1=2;
var num2=3;

console.log("Suma :" +num1+num2);
console.log("Resta :" +num1-num2);
console.log("Multiplicació :" +num1*num2);
console.log("División :" +num1/num2);
console.log("Resto :" +num1 % num2);

console.log("--- EJERCICIO 5 ----")
/* 5 */
var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1<0) {
  console.log("numero1 es negativo o distinto de cero");
}
if((numero1+1)<numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}