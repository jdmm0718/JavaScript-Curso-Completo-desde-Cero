/*
En el juego de golf cada hoyo tiene un par representa el numero rpmedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un hombre diferente dependiendo de que tan por encima o por debajo del par esten sus golpes.

Tu funcion tomara los argumentos par y golpes.

Retoma La cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor.

golpes              retornar
--------------------------------------------------------------
1                   "Hole-in-one"
<= par  -  2        "Eagle"
par - 1             "Birdie"
par                 "Par"
par + 1             "Bogey"
par + 2             "Double Bogey"
>= par + 3          "Go Home!"

par y golpes siempre seran numericos y positivos.
*/

function puntageDeGolf(par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one!";
    }
    else if (golpes <= par - 2) {
        return "Eagle";
    }
    else if (golpes == par - 1) {
        return "Bridged";
    }
    else if (golpes == par) {
        return "par";
    }
    else if (golpes == par + 1) {
        return "Bogey";
    }
    else if (golpes == par + 2) {
        return "Double Bridged";
    }
    else if (golpes >= par + 3) {
        return "Go Home!";
    }    
}


console.log(puntageDeGolf(4, 7));
