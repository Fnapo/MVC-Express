// Inicio modelo.js

let fs = require('fs');
let path = require('path');
let nombreJSON = path.join(__dirname, 'personas.json');
const personasIniciales = JSON.stringify([
    { nombre: "Luisa", edad: "19" },
    { nombre: "Juan", edad: "51" },
    { nombre: "Pedro", edad: "47" },
    { nombre: "Juan Antonio", edad: "57" }
]);
if (!fs.existsSync(nombreJSON)) {
    fs.writeFileSync(nombreJSON, personasIniciales);
}
let baseDatos = require(nombreJSON);
const guardarDatos = () => {
    fs.writeFileSync(nombreJSON, baseDatos);
};


module.exports = baseDatos;

// Fin modelo.js