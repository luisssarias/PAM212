
const personas = [
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "María", edad: 28}
];

const puntoUno = personas.find(persona => persona.nombre === "Luis");
console.log(puntoUno); 

const puntoDos = personas.forEach (function(persona) {
    console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad);
});

const puntoTres = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("Edad total: " + puntoTres);


