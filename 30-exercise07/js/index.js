console.log("--- EJERCICIO 7 ----");

/* 7 Calcular factorial */

calculaFactorial = () => {
  var numero = document.getElementById("numero").value;
  var factorial = 1;
  for (var i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }
  alert("El factorial de " + numero + " es: " + factorial);
};
