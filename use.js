// Importar el módulo encriptador (no necesitas 'require' en un navegador web)
// encriptador.js ya debe estar incluido en tu página HTML antes de este script
// Puedes acceder a las funciones y datos directamente

// Usar las funciones y datos del encriptador
const modificador = 24;
const mensaje = 'AEON MERX';

const mensajeEncriptado = encriptar(modificador, mensaje);
console.log('Mensaje encriptado:', mensajeEncriptado);

const mensajeDesencriptado = desencriptar(modificador, mensajeEncriptado);
console.log('Mensaje desencriptado:', mensajeDesencriptado);

const entropia = calcularEntropia(mensajeEncriptado);
console.log('Entropía del mensaje:', entropia);

console.log('Colores:', colores);
console.log('Planetas:', planetas);
