

console.log("--- EJERCICIO  10 ----");

let resultado = "";
document.getElementById("txt1").value = resultado;
/* 9 Comprueba mayusculas, minusculas */

inicia = () => {
  var texto = document.getElementById("texto").value;

  resultado += "Texto introducido :\n" + texto + "\n";

  //unificar todo el texto a minusculas
  texto = texto.toLowerCase();

  //eliminar espacios en blanco
  var textoSinEspacios = "";
  textoSinEspacios = texto.replace(/\s+/g, "");

  //trnsformar texto en un array de letras
  var textoArray = texto.split("");

  //Creamos dos variables de texto, una con el texto dcha->izquierda y otra
  //izquierda->derecha
  var textoDerecho = textoSinEspacios.split("");
  var textoIzquierdo = textoSinEspacios.split("").reverse();

  console.log(textoArray);
  console.log(textoSinEspacios);
  console.log(textoDerecho);
  console.log(textoIzquierdo);

  //Comprobar si son iguales
  var iguales = true;
  for (i in textoDerecho) {
    if (textoDerecho[i] === textoIzquierdo[i]) {

    } else {
      iguales = false;
    }
  }

  if (iguales) {
    resultado += "Es un palindromo\n";
  } else {
    resultado += "No es un palindromo\n";
  }

  //Imprime resultado en textarea
  document.getElementById("txt1").value = resultado;
  alert(resultado);
};
