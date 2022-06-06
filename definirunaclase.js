class TranbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
};


var zeus = new TranbordadorEspacial("Jupiter");

console.log(zeus.planeta);

var zeus = new TranbordadorEspacial("Marte");

console.log(zeus.planeta);


class libro {
    constructor(autor) {
        this._autor = autor;
    }
    get autor() { 
        return this._autor; 
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
};

const libro = new Libro("anonimo");

console.log(libro.autor);