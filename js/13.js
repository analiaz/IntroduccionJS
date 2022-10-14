// uniendo objetos

//objetos
const producto = {
    nombreProducto : "Monitor",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//en js se prefiere q se cree un nuevo objeto

const nuevoObj = { ...producto, ...medida}