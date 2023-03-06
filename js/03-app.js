// Singleton

//Prevenir que no se puedan crear multiples instancias del mismo objeto


let instancia = null;

class Persona{
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
           return instancia;
        }
    }
}

const persona = new Persona('Juana', 'codigo@gmail.com')
const person2 = new Persona('Karen', 'codigo2@gmail.com')

console.log(persona);
console.log(person2);