const fecha = () => new Date();

const concatenarArreglo = (arr1, arr2) => arr1.concat(arr2);


console.log(concatenarArreglo([1, 2], [3, 4, 5]));


const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};

console.log(sumar(1, 1));

const incremetar = (num, valor = 1) => num + valor;

console.log(incremetar(5, 3));