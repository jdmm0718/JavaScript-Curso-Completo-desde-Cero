var miArreglo = []

for (var i = 0; i < 10; i += 2) {
    miArreglo.push(i);
}

console.log(miArreglo);



var miArreglo = [];

for (var i = 1; i < 50; i += 2) {
    miArreglo.push(i);
}

console.log(miArreglo);



for (var i = 15; i >=10; i -= 2) {
    console.log(i);
}


var miArreglo = [];

for (var i = 10; i >= 0; i -= 2) {
    miArreglo.push(i);
}
console.log(miArreglo);



var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    console.log("Iteracion " + i);
    console.log(miArreglo[i]);
    total += miArreglo[i];
}

console.log(total);


var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

function contarNumerosPares(arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total ++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));