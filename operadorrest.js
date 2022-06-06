function miFuncion(...args) {
    console.log(args.length);
}

miFuncion([1, 2], [3, 4], [5, 6]);


const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};

const numeros = [1, 2, 3];

function sumar(x, y, z) {
    return x + y + z;
}

console.log(sumar(...numeros));


const usuario = {
    nombre: "Gino Smith",
    edad: "34"
};

const {nombre, edad} = usuario;

console.log(usuario);






var coordenadas = {
    x: 4,
    y: 6,
    z: 12
}
const {x, y, z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);


