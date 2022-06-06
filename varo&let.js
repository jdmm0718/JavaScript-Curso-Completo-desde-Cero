var campista = "James";
var campista = "David";

let campista = "James";
campista = "David";

console.log(campista);



for ( var i = 0; i < 3; i++) {
    console.log(i);
}

console.log("variable " + i);


var mostrarColor = true;

if (mostrarColor) {
    let color = "verde";
    console.log(color);
}

function calcularAreaCirculo(radio) {
    const PI = Math.PI

    if (radio < 0) {
        return undefined;
    }
    return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));
console.log(calcularAreaCirculo(20));
console.log(calcularAreaCirculo(30));
console.log(calcularAreaCirculo(50));

let color = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negron": "#000000",
    "blanco": "#ffffff"
};

Object.freeze(color);