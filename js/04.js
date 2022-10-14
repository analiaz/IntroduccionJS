//strings o cadenas de texto
const producto = "Monitor de 20 pulgadas" 

//constructor
const producto2 = String('Monitor de 30 puldadas');
const producto3 = new String('Monitor de 50 puldadas');

console.log(producto)
console.log(producto2)
console.log(typeof producto3) // es un objeto (typeof te dice de que tipo es)

// metodos para strings
const tweet = 'Aprendiendo Javascript con el curso de desarrollo web completo';

const producto4 = '"MonitorHD"'

const email = "correro@gmail.com"

//length es para la extension
console.log(tweet.length)

//indexOf retorna posicion
console.log(tweet.indexOf('Javascript')); //devuelve la posicion donde existe el elemento
console.log(producto.indexOf('monitor')); //si no existe da unnumero negativo
console.log(email.indexOf('@')); //es muy utilizado para validad un mail

//Includes (retorna true o false)
console.log(tweet.includes('Javascript'));
console.log(tweet.includes('Tablet'));

