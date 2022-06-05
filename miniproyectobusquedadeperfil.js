var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwars", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero":"0487345643",
        "gustos": ["Casos Interesantes", "violin"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no esta en la lista de contactos.";
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "numero"));
console.log(buscarPerfil("Nora", "diereccion"));
console.log(buscarPerfil("Bob", "gustos"));