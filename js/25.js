const carrito = [
    {nombre: 'monitor', precio: 500 },
    {nombre: 'tele', precio: 300 },
    {nombre: 'tablet', precio: 1500 },
    {nombre: 'celular', precio: 11500 },
];

//foreach (si solo quieres iterar)
carrito.forEach(function(producto) {
    console.log(producto.nombre)
});

carrito.forEach(producto => console.log(producto.nombre));

//map (si quieres crear un nuevo areglo)
const arre2 = carrito.map(producto => console.log(producto.nombre));
