// Usar las funciones y datos del encriptador directamente desde el módulo encriptador.js
const modificador = 24;
const mensaje = 'AEON MERX';

// Encriptar el mensaje
const mensajeEncriptado = encriptador.encriptar(modificador, mensaje);
console.log('Mensaje encriptado:', mensajeEncriptado);

// Desencriptar el mensaje
const mensajeDesencriptado = encriptador.desencriptar(modificador, mensajeEncriptado);
console.log('Mensaje desencriptado:', mensajeDesencriptado);

// Calcular la entropía del mensaje encriptado
const entropia = encriptador.calcularEntropia(mensajeEncriptado);
console.log('Entropía del mensaje:', entropia);

// Acceder a los datos de colores y planetas directamente desde el módulo encriptador.js
console.log('Colores:', encriptador.colores);
console.log('Planetas:', encriptador.planetas);

// Convertir números en el mensaje a colores
const mensajeConColores = encriptador.convertirNumerosAColores(mensajeEncriptado);
console.log('Mensaje con colores:', mensajeConColores);

// Convertir colores en el mensaje a planetas
const mensajeConPlanetas = encriptador.convertirColoresAPlanetas(mensajeConColores);
console.log('Mensaje con planetas:', mensajeConPlanetas);
