function clasificarValor(valor) { 
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gama";
            break;
        case 4:
            respuesta = "delta";
            break;    
    }    
    return respuesta;
}

console.log(clasificarValor(1));


var producto = "hamburguesa";

    switch (producto) {
        case "pizza":
            console.log("La pizza basica cuesta $10.55");
            break;
        case "hamburguesa":
            console.log("Las hamburguesas cuesta $6.78");
            break;
        case "helado":
            console.log("El helado cuesta $2.8");
            break;
    }



function clasificarValor(valor) { 
    var respuesta;
    switch (valor) {
        case "pizza":
            respuesta = "La pizza basica cuesta $10.55";
            break;
        case "hamburguesa":
            respuesta = "Las hamburguesas cuesta $6.78";
            break;
        case "helado":
            respuesta = "El helado cuesta $2.8";
            break;
           }    
    return respuesta;
}

console.log(clasificarValor("helado"));

function seleccionaIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}

console.log(seleccionaIdioma(1));

function clasificadorVolumen(valor) {
    var volumen
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}

console.log(clasificadorVolumen(1));