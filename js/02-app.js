//Constructor Pattern

class Persona{
    constructor(nombre,email){
        this.nombre = nombre
        this.email = email
    }
}

class Client extends Persona{
    constructor(nombre, email,empresa){
        super(nombre,email);
        this.empresa = empresa
    }
}

const cliente = new Client('Miguel', 'miguel@gmail.com', 'Farsol')
console.log(cliente)