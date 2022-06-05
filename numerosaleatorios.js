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


console.log(parseInt(1542545, 16));


function retornarMinimo(x, y) {
    return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 2);


function compararNumeros(a, b) {
    // if (a == b) {
    //     return "a y b son igual";
    // } else if (a > b) {
    //     return "a es mayor que b";
    // } else {
    //     return "a es menor que b";
    // }
    return a == b ? "a y b son iguales" 
        : a > b ? "a es mayor que b"
        : "b es mayor que a";
}

console.log(compararNumeros(15, 15));