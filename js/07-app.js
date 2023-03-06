// Namespaces 

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'HotDog',
        precio: 25
    }
]

restaurantApp.funciones = {
    mostrarMenu: platillos =>{
        console.log('Bienvenidos a nuestro menu ')

        platillos.forEach( (platillo,index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)
        });
    },

    ordenar: id =>{
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo)
    }
};



//Con un namespace es muy dificil que choquen los nombres de las funciones en un proyecto grande
restaurantApp.funciones.ordenar(2)
restaurantApp.funciones.agregarPlatillo('Taco', 20)

const {platillos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos)