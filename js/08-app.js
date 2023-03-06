// Mediator
// Patron de diseño que se comunica con varios objetos a la vez 


function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo,precio)=>{
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de: $${precio}`);
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`)
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) =>{
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta(){
    let compradores = {};
    return{
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear Objetos

const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Registrarlos en la sala de subastas
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor)

vendedor.oferta('Mustang 66', 300)

juan.oferta(350, juan);
pablo.oferta(450, pablo);
juan.oferta(550, juan);
pablo.oferta(750, pablo)

vendedor.vendido('Pablo')