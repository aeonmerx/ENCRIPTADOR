//  use.js

// Importar el módulo encriptador
const encriptador = require('./encriptador');

// Usar las funciones y datos del encriptador
const modificador = 24;
const mensaje = 'AEON MERX';

const mensajeEncriptado = encriptador.encriptar(modificador, mensaje);
console.log('Mensaje encriptado:', mensajeEncriptado);

const mensajeDesencriptado = encriptador.desencriptar(modificador, mensajeEncriptado);
console.log('Mensaje desencriptado:', mensajeDesencriptado);

const entropia = encriptador.calcularEntropia(mensajeEncriptado);
console.log('Entropía del mensaje:', entropia);

console.log('Colores:', encriptador.colores);
console.log('Planetas:', encriptador.planetas);
