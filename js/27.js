//POO
//object Literal
const producto = {
    nombre: 'Tablet',
    precio: 4000
}

//Object Constructor (nombre de la clse en mayuscula)
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio
}

//funcion de un constructor
function formatearProducto(producto) {
    return '${producto.nombre} y ${producto.precio}'
}

//prototype nos ayuda a crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return '${this.nombre} y ${this.precio}'
}


//instancia de clase
const prod2 = new Producto('monitor', 900);
const prod3 = new Producto('laptop ', 900);

