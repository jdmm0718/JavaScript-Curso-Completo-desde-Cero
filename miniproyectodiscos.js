/*
Tenemos un objeto que representa parte de una coleccion de albunes musicales.

Cada albun tiene un numero de identificacion unico (id) asociado a otras propiedades.

No toso los albunes tienen la información completa.
*/

var coleccionDeDiscos = {
    7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
}

/*
Define  una funcion actualizarDiscos que tome los siguientes parametros:
- discos (el objeto representara la coleccion de disco).
- id.
- Propiedades ("artista" o "canciones").
- valor.

Tu meta es completar la funcion implementando las siguientes reglas para modificar el objeto pasado a la funcion

- Si el "valor" es una cadena vacia, elimina la propiedad del albun correspondiente.

- Si "propiedad" es igual ala cadena de caracteres "canciones" pero el album no tiene una propiedad llamada "canciones", crea un arreglo vacio y agrega "valor" a ese arreglo.

*/

var coleccionDeDiscos = {
    7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
}

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

console.log(coleccionDeDiscos[5439].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 5439, "tituloDelAlbum", "Mamma Mia");

console.log(coleccionDeDiscos[5439].tituloDelAlbum);

console.log(coleccionDeDiscos[5439].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");

console.log(coleccionDeDiscos[5439].tituloDelAlbum);


