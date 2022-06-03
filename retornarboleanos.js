function esMenorQue(a,b) {
    return a < b;
}
console.log(esMenorQue(2, 3));

function miFuncion() {
    console.log("Hola")
    return "mundo"
}

console.log(miFuncion());

function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(144));
