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