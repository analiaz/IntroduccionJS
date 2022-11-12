//Fetch Api
function obtenerEmpleados(){

    const archivo = 'empleados.json';
/* 
    fetch(archivo)
        .then( resultado =>  resultado.json())
        .then( datos => {
            const { empleados } = datos;

            empleados.array.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                document.querySelector('.contenido').textContent = empleado.nombre
            });
        })
*/

// otra manera es con away
        const resultado = await fetch(archivo);
        const datos = await resultado.json();
        console.log(datos);
}
obtenerEmpleados();