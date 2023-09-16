// Array de poleras con información de talla y precio
let poleras = [
    { nombre: "Polera 1", talla: "S", precio: 20 },
    { nombre: "Polera 2", talla: "M", precio: 25 },
    { nombre: "Polera 3", talla: "L", precio: 30 },
    
];

// Solicitar al usuario que elija una talla
let tallaElegida = prompt("Ingresa una talla (S, M o L):");

// Filtrar el array para mostrar las poleras con la talla seleccionada
let polerasFiltradas = poleras.filter(function(polera) {
    return polera.talla === tallaElegida;
});

// Mostrar las poleras que coinciden con la talla seleccionada
if (polerasFiltradas.length > 0) {
    console.log("Poleras disponibles en talla " + tallaElegida + ":");
    polerasFiltradas.forEach(function(polera) {
        console.log(polera.nombre + " - Precio: $" + polera.precio);
    });
} else {
    console.log("No hay poleras disponibles en talla " + tallaElegida);
}