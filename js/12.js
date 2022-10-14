"use strict"; //corre JS en modo estricto

//objetos
const producto = {
    nombreProducto : "Monitor",
    precio: 300,
    disponible: true
}

producto.imagen = 'imagen.jpg'

// si no quisiera que el objetos sea modificado usar freeze tampoco se le puede agregar tampoco eliminar
// ni cambiarun valor

Object.freeze(producto);

//puedes saber si un bojeto esta congelado
console.log(Object.isFrozen(producto)); // da true

// seal no podes eliminar, agrgear pero si podes modificar los existentes

Object.seal(producto);