//Async | away

 function descargarNUevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');

        setTimeout( () => {
            resolve('los clientes fueron descargados');
        }, 5000);
    
    });
 }

 function descargarUltimosClientes(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere');

        setTimeout( () => {
            resolve('los clientes fueron descargados');
        }, 3000);
    
    });
 }

 async function app() {
    try {
        //si necesito algo de nuevos clientes para ultimos clientes entonces lo dejo como abajo
        //const resultado = await descargarNUevosClientes();
        //const pedidos = await descargarUltimosClientes();

        //pero si quiero en paralelo creo una promesa con arreglos y eso optimiza
        const resultado = await Promise.all([descargarNUevosClientes(), descargarUltimosClientes()])
    } catch {
        console.log(error);
    }
 }

 app();