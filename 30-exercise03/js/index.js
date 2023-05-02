/* Creacion de un array llamado meses que almacena el nombre de los doce meses del año*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'May', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/* Imprimo por consola del navegador los meses*/
console.log("MESES DEL AÑO");
for (let i = 0; i < meses.length; i++) {
    console.log( 'Mes '+ (i+1)+': '+meses[i]);
}