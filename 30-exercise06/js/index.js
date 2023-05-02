console.log("--- EJERCICIO 6 ----");

/* 6 DNI */
var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "R",
  "T",
];

checkDni = () => {
  /* obtengo variable DNI */
  var dni_user = document.getElementById("dni_user").value;
  var dni_letter = document.getElementById("dni_letter").value;
  /* Verifico si el numero del dni  es correcto */
  if (dni_user < 0 || dni_user > 99999999) {
    //numero dni incorrecto
    alert("El numero : " + dni_user + " no es válido");
  } else {
    var letraCalculada = calculaLetraDni(dni_user); //Calcula la letra del DNI
    //Comprueba la letra introducida igual a la letra calculada
    letraCalculada !== dni_letter
      ? alert("La letra introducida es incorrecta")
      : alert("El DNI y la LETRA son correctos"); //DNI correcto
  }
};

/** Comprueba la letra del DNI */
calculaLetraDni = (dni) => {
  return letras[dni % 23];
};
