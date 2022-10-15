//arrow function


const sumar2 = (n1,n2) => console.log(3+3)
sumar2(4, 5);

const aprendiendo = tecnologia => console.log(`Apendiendo ${tecnologia}`)

aprendiendo('Javascript')

//some ideal para arreglos de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular')

resultado = carrito.reduce( (total, producto) => total + producto.precio, 0)

resultado = carrito.filter(producto => producto.precio > 400)

