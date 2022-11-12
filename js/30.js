//Promesas son valores que pueden estar disponibles ,a hora 
// en el futuro o nunca

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true

    if(auth) {
        resolve('usuario autenticado');
    } else {
        reject('usuario no autenticado');
    }

});

usuarioAutenticado
    .then( (resultado) => console.log(resultado))
    .catch( (error) => console.log(error)) //para reject lo agarra el cathc

// En los promises existen 3 valores
//Pending: no se a cumplido pero tampoco se a rechazado
//Fulfilled : ya se cumplio
// Reject: se a rechazado no se pudo cumplir
