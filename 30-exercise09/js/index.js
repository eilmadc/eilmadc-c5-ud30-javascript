

console.log("--- EJERCICIO  9----");

let resultado="" ;
/* 9 Comprueba mayusculas, minusculas */

inicia = () => {
  var texto = document.getElementById("texto").value;

  resultado += "Texto introducido\n"+texto+"\n";

  //Comprueba mayusculas y minusculas
  if (!compruebaMayusculas(texto) && !compruebaMinusculas(texto)) {
    resultado += "El texto está en mayúsculas y minúsculas\n";
  }

  //Imprime resultado en textarea
  document.getElementById("txt1").value = resultado;
  alert(resultado);
};

compruebaMayusculas = (texto) => {
  if (texto.toUpperCase() == texto) {
    resultado += "Todo el texto está en Mayúsculas\n";
    return true;
  } else {
    resultado += "Todo el texto no está en Mayúsculas\n";
    return false;
  }
};

compruebaMinusculas = (texto) => {
  if (texto.toLowerCase() == texto) {
    resultado += "Todo el texto está en Minúsculas\n";
    return true;
  } else {
    resultado += "Todo el texto no está en Minúsculas\n";
    return false;
  }
};

