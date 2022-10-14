//arrays

const num = [1, 2, 33, 233]

const meses = ['Enero', 'Febrero']

//acceder  alos valores de un array
num[0] // = 1 (los arrays empiezan en pos 0)

//longitud del array
meses.length

//recorrer arreglos

meses.forEach( function(mes) {
    console.log(mes)
})


num.push(34)//agegar numeros al final


num.unshift(-23, 33)//agregar num adelante

meses.pop()//para eliminar ult elementos del arreglo

meses.shift() // elimina el primero

//eliminar de una pos [pueden ser varios] (utiliza entre que posiciones necesita eliminar)
//          cual, cuantos
meses.splice(2, 1)

//Rest opertor o Spread operators (no modificas el arreglo original)

const nueArreglor = [...meses, 'Junio'] //atras mejor que push
const nueArreglor2 = ['Junio', ...meses ] //adelante mejor que unshift
