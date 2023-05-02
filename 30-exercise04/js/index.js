/* Imprimo por consola del navegador el mensaje:  Hola Mundo*/
console.log("Hola Mundo!");
/* Imprimo por consola del navegador el mensaje:  Soy el primer Script*/
console.log("Soy el primer script");
/*Guardo los mensajes del console log en variables,
y los muestro en un alert */
let mensaje1 = "Hola Mundo!";
let mensaje2 = '\nQué fácil es incluir \'comillas simples\' \n y "comillas dobles" ';
alert(mensaje1 + mensaje2);
/* Creacion de un array llamado meses que almacena el nombre de los doce meses del año*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'May', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/* Imprimo por consola del navegador los meses*/
console.log("MESES DEL AÑO");
for (let i = 0; i < meses.length; i++) {
    console.log( 'Mes '+ (i+1)+': '+meses[i]);
}

/* 4 : Array de valores con diferentes tipos de datos*/
var valores = [true, 5 , false, "hola","adios",2];
/* 4: 1. Determina cual es el elemento de texto mayor */
/* 4: 2. Utilizar operaciones con los valores booleanos para determinnar true y false */
if((valores[3].length>valores[4].length)===valores[0]) {
    console.log("El elemento 3 es mayor que el elemento 4");
    console.log("Por tanto es " + valores[0]);
} 
/* 4: 3. Determina resultado de 5 operaciones numéricas con dos elementos numéricos */
var num1=2;
var num2=3;

console.log("Suma :" +num1+num2);
console.log("Resta :" +num1-num2);
console.log("Multiplicació :" +num1*num2);
console.log("División :" +num1/num2);
console.log("Resto :" +num1 % num2);