//objetos
const producto = {
    nombreProducto : "Monitor",
    precio: 300,
    disponible: true
}

//forma anterior
const precioProducto = producto.precio

//destructuring
// se crea la variable y se le agrega el valor en un solo paso y si o si debe tener el mismo nombre la propiedad
const {precio, nombreProducto} = producto;