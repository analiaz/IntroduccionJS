//declaracion de funcione

function sumar() {
    console.log(10+10);
}

//llamada a la funcione
sumar()

// Expresion de la funcion
// esta declaracion js la ve como una variable mas que una funcion y por esto da error si la llamada esta antes

const sumar2 = function() {
    console.log(3+3)
}

sumar2()


//Hoisting -> JS hace dos pasadas al codigo 
// -> primero se registran todas las funciones 
// -> segundo se registran lo que sn los llamados a las funciones

// IIFE es una func que s emanda a llamar a asi misma, sirven para que no se pueda acceder 
//a los valores internos en esta (con otros archivos)
(function() {
    console.log('Esto es una funcion');
})();