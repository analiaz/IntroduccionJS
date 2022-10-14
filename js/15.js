//arrays methods
const meses = ['Enero', 'Febrero', 'marzo', 'abril']

// se puede tere n arreglo de objetos

const carrito = [
    {nombre: 'monitor', precio: 500 },
    {nombre: 'tele', precio: 300 },
    {nombre: 'tablet', precio: 1500 },
    {nombre: 'celular', precio: 11500 },
]

meses.forEach(function(mes) {
    if(mes == 'marzo') {
        console.log('marzo si existe')
    }  
})

// Includes sirve para un arreglo plano
const resultado = meses.includes('Marzo'); // devuelve un bool

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})

//reduce

result = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0 ) //inicia en 0


//filter obtener un elemento en base a filtros

resu3= carrito.filter(function(producto) {
    return producto.precio > 400
})

resu4= carrito.filter(function(producto) {
    return producto.nombre !== 'celular'
})