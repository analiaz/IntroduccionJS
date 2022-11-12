//seleccionamos contenido html y mencionamos un selector
const boton = document.querySelector('#boton');

//eventos escuchados
boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
})

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        body:'Codigo con Ana, los mejores tutoriales'
    } )
}