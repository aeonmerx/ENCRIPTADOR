// Importar el módulo encriptador (no necesitas 'require' en un navegador web)
// encriptador.js ya debe estar incluido en tu página HTML antes de este script
// Puedes acceder a las funciones y datos directamente

// Usar las funciones y datos del encriptador
const modificador = 24;
const mensaje = 'AEON MERX';

// Verificar si el modificador es un número entero válido
if (!isNaN(modificador) && Number.isInteger(modificador)) {
  // Encriptar el mensaje
  const mensajeEncriptado = encriptar(modificador, mensaje);
  console.log('Mensaje encriptado:', mensajeEncriptado);

  // Desencriptar el mensaje
  const mensajeDesencriptado = desencriptar(modificador, mensajeEncriptado);
  console.log('Mensaje desencriptado:', mensajeDesencriptado);

  // Calcular la entropía del mensaje encriptado
  const entropia = calcularEntropia(mensajeEncriptado);
  console.log('Entropía del mensaje:', entropia);

  // Acceder a los datos de colores y planetas directamente desde el módulo encriptador.js
  console.log('Colores:', colores);

  // Convertir números en el mensaje a colores
  const mensajeConColores = convertirNumerosAColores(mensajeEncriptado);
  console.log('Mensaje con colores:', mensajeConColores);

  
