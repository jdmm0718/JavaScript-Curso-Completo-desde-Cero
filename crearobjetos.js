var miPerro = {
    "nombre": "gino",
    "edad": 5,
    "peso": 6,
    "raza": "beagle"
};

console.log(miPerro)

console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);


var miCuadernos = {
    "color": "verde",
    "categoria": "3",
    "numero de paginas": 200,
    "numero de hojas": 100,
};

console.log(miCuadernos["color"]);
console.log(miCuadernos["categoria"]);
console.log(miCuadernos["numero de paginas"]);
console.log(miCuadernos["numero de hojas"]);

var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
}

var posiscion = 4;

console.log(resultados[posiscion]);

var mochila = {
    "color": "azul",
    "tamamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color);

mochila.color = "verde";
console.log(mochila.color);

console.log(mochila.contenido);

mochila.contenido.push("lapiz");
console.log(mochila.contenido);


var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "Español",
    "duracion": "30"
};

curso.visitas = 34500;

console.log(curso.visitas);
console.log(curso);

var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "Español",
    "duracion": "30"
};

delete curso.duracion;

console.log(curso);

function buscarElemnetoQuimico(simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };

    return simbolosQuimicos[simbolo];
}

console.log(buscarElemnetoQuimico("Al"));
console.log(buscarElemnetoQuimico("S"));
console.log(buscarElemnetoQuimico("Cl"));
console.log(buscarElemnetoQuimico("He"));
console.log(buscarElemnetoQuimico("B"));
console.log(buscarElemnetoQuimico("Li"));


var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": "4.56"
};

console.log(miCuaderno.hasOwnProperty("color"));
console.log(miCuaderno.hasOwnProperty("origen"));


function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esa propiedad.";
    }
}

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio":   "4.56"
};

console.log(verificarPropiedad(miCuaderno, "color"));


var ordenesDePizza = [
    {
        "tipo": "margarita",
        "tamamaño": "individir",
        "precio": "5.67",
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "politana": true
    }
];

console.log(ordenesDePizza[0]);
console.log(ordenesDePizza[1]);
console.log(ordenesDePizza[2]);
console.log(ordenesDePizza[0].tipo);
console.log(ordenesDePizza[0]["precio"]);


var miReceta = {
    descripcion: "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza",
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadita",
            "mantequilla": "200 grs",
        }
    }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);
console.log(miReceta.ingredientes.masa);
console.log(miReceta.ingredientes.cobertura);


var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

var primeraFlor = misPlantas[0].lista[0];