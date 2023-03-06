// Mixins

class Persona{
    constructor(nombre,email){
        this.nombre = nombre
        this.email = email
    }
}

class Cliente{
    constructor(nombre,email){
        this.nombre = nombre
        this.email = email
    }
}


const  funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`)
    }
}

// Añadir funcionesPersona al objeto Persona
Object.assign(Persona.prototype, funcionesPersona)
Object.assign(Cliente.prototype, funcionesPersona)

const cliente = new Persona('Juan', 'juan@gmail.com');

console.log(cliente)
cliente.mostrarInformacion()
cliente.mostrarNombre()

const cliente2 = new Cliente('cliente2', 'cliente2@gmail.com');
console.log(cliente2)
cliente2.mostrarInformacion()
cliente2.mostrarNombre()