//metodos de propiedad: es una funcion con la sintaxis de un metodo

const reproducir = {
    reproducir : function(id){
        console.log(`reproduciendo cancion: ${id}`)
    },
    pausar : function() {
        console.log("pausando...")
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproducir la playList: ${nombre}`)
    }
}

reproductor.reproducir(30840)