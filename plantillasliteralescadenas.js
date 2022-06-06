/* Plantillas Literales o Plantillas de Cadena

Caracteristicas:
- Se usan el acento invertido (backtick) ' en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las lineas se represervan como se escriben en el codigo.
- Para remplazar una variable se escribe ${variable}.
- Dentro de ${} tambien se puede escribir expresiones.
*/


var a = 6;

console.log(`El valor de a es ${a}`);

let nombre = 'Cris';
let edad = 25;
console.log('Mi nombre es %s y tengo %d', nombre, edad);


const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});



const persona = {
    nombre: "isabel",
    presentarse: function() {
        return `!hola! mi nombre es ${this.nombre}`;
    }
};

console.log(persona.presentarse());

const persona = {
    nombre: "isabel",
    presentarse() {
        return `!hola! mi nombre es ${this.nombre}`;
    }
};

console.log(persona.presentarse());