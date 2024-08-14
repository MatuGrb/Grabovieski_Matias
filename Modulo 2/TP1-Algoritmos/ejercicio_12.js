class Vehiculo {
    marca;
    modelo;
    año;
    constructor(unaMarca, unModelo, unAño) {
        this.marca = unaMarca;
        this.modelo = unModelo;
        this.año = unAño;
    }
    obtenerInformacion() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.año);
    }
}

class Automovil extends Vehiculo {
    color;
    precio;
    constructor(unaMarca, unModelo, unAño, uncolor, unprecio) {
        super(unaMarca, unModelo, unAño);
        this.color = uncolor;
        this.precio = unprecio;
    }
    obtenerInformacion() {
        super.obtenerInformacion();
        console.log("Color: " + this.color);
        console.log("Precio: " + this.precio);
    }
}

const Amarok_2021 = new Vehiculo("Volkswagen", "Amarok", 2021);
const Taos_2023 = new Automovil("Volkswagen", "Taos", 2023, "Azul Marino", 30000000);

Amarok_2021.obtenerInformacion();
Taos_2023.obtenerInformacion();