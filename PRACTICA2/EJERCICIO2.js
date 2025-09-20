
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250},
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 },
];

const Precio = productos.filter(producto => producto.precio > 1000);
console.log("Productos con precio mayor a 1000:");
console.log(Precio);

const resultadoPrecio = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:");
console.log(resultadoPrecio);

