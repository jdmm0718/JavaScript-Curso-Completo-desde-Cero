var estacion = "Invierno";

if (estacion == "Invierno") {
  console.log("¡SI! Me encanta el invierno...");
  } else {
    console.log("Noooo");
  }

  var x = 5;

if (x < 2) {
  console.log("si es menor");
} else {
  console.log("es mayor");
}


function clasificarValor(valor) {
    if (valor % 2 == 0) {
      console.log("divisible entre 2");
    } else if  (valor % 3 == 0) {
        console.log("divisible entre 3");
    } else {
      console.log("No es divisible entre las opciones");
    }
  }
  
  clasificarValor(2);
  clasificarValor(15);
  clasificarValor(7);

  function clasificarValor(valor) {
    if (valor < 5 ) {
      console.log("menor que 5.");
    } else if (valor < 10) {
      console.log("menor que 10.");
    } else {
      console.log("mayor o igual a 10.");
    }
  }
  
  clasificarValor(7);

  function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5 ) {
      console.log("Bajo Peso");
    } else if (indiceDeMasaCorporal <= 24.9) {
      console.log("Normal");
    } else if(indiceDeMasaCorporal <= 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obeso");  
    }
  } 
  
  interpretarIMC(17);
  