

console.log("--- EJERCICIO 8 ----");

/* 8 Comprueba si es Par */

compruebaPar = () => {
  var numero = document.getElementById("numero").value;

  alert((numero % 2 === 0)
    ? ("El numero " + numero + " es par")
    : ("El numero " + numero + " es impar"));
};
