//clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `${this.nombre} y ${this.precio}`
    }
}

const prod = new Producto();

//instancia de clase
const prod2 = new Producto('monitor', 900);
const prod3 = new Producto('laptop ', 900);

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //va a buscar los valores del constructor padre
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN ${this.isbn}`;
    }
}

const libro = new Libro('javascript', 120, '123456');