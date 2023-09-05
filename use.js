// Espera a que el encriptador.js se cargue completamente
document.querySelector('script[src="https://aeonmerx.github.io/ENCRIPTADOR/encriptador.js"]').addEventListener('load', function () {
  // El encriptador.js se ha cargado, ahora puedes usar sus funciones y datos

  // Pedir al usuario que ingrese el modificador
  const modificadorInput = prompt('Ingrese el modificador (número entero):');
  const modificador = parseInt(modificadorInput);

  // Pedir al usuario que ingrese el mensaje
  const mensaje = prompt('Ingrese el mensaje (texto):');

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
    console.log('Planetas:', planetas);

    // Convertir números en el mensaje a colores
    const mensajeConColores = convertirNumerosAColores(mensajeEncriptado);
    console.log('Mensaje con colores:', mensajeConColores);

    // Convertir colores en el mensaje a planetas
    const mensajeConPlanetas = convertirColoresAPlanetas(mensajeConColores);
    console.log('Mensaje con planetas:', mensajeConPlanetas);
  } else {
    console.log('El modificador ingresado no es un número entero válido.');
  }
});
