//This palabra reservada

const reservas = {
    nombre: 'Ana',
    apellido: 'Zun',
    total: 50000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reservas.informacion()