//Objetos

const nombreProducto = "Monitor"
const precio = 300
const disponible = true


const producto = {
    nombreProducto : "Monitor",
    precio: 300,
    disponible: true
}

//propiedade de punto para acceder a una propiedad

console.log(producto.precio);

// otra manera de acceder a la propiedad
console.log(producto["precio"]);

// agregar nuevas propiedades
producto.imag = 'imagen.jpg'

//eliminar propiedades
delete producto.disponible;