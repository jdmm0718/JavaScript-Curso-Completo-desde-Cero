function generarFraccionAleatorio () {
    return Math.random();
}

console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());

var numeroAleatorio = Math.random();

console.log(numeroAleatorio);



var  numeroAleatorio0y19 = Math.floor(Math.random() * 20);

console.log(numeroAleatorio0y19);


function generarEnteroAleatorio(limiteSUperior) {
    return Math.floor(Math.random() * limiteSUperior);
}

for (var i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(100));
}


function rangoAleatorio(limiteInferior, limiteSUperior) {
    return Math.floor(Math.random() * (limiteSUperior - limiteInferior + 1)) + limiteInferior;
}

for (var i = 0; i < 15; i++) {

console.log(rangoAleatorio(3, 8));

}


