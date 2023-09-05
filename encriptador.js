// encriptador.js

// Objeto que contiene las equivalencias de caracteres
const equivalencias = {
  'A': '693', 'B': '396', 'C': '111', 'D': '714', 'E': '417',
  'F': '222', 'G': '825', 'H': '528', 'I': '333', 'J': '936',
  'K': '639', 'L': '444', 'M': '147', 'N': '741', 'O': '555',
  'P': '258', 'Q': '852', 'R': '666', 'S': '369', 'T': '963',
  'U': '777', 'V': '471', 'W': '174', 'X': '888', 'Y': '582',
  'Z': '285', 'Ñ': '999',
  'a': '693', 'b': '396', 'c': '111', 'd': '714', 'e': '417',
  'f': '222', 'g': '825', 'h': '528', 'i': '333', 'j': '936',
  'k': '639', 'l': '444', 'm': '147', 'n': '741', 'o': '555',
  'p': '258', 'q': '852', 'r': '666', 's': '369', 't': '963',
  'u': '777', 'v': '471', 'w': '174', 'x': '888', 'y': '582',
  'z': '285', 'ñ': '999'
};

const colores = {
  '1': 'amarillo', '2': 'azul', '3': 'rojo', '4': 'verde',
  '5': 'naranja', '6': 'café', '7': 'negro', '8': 'violeta', '9': 'gris'
};

const planetas = {
  'sol': 'amarillo', 'venus': 'azul', 'marte': 'rojo', 'tierra': 'verde',
  'mercurio': 'naranja', 'jupiter': 'café', 'saturno': 'negro', 'urano': 'violeta', 'luna': 'gris'
};

// Función para encriptar un mensaje
function encriptar(modificador, mensaje) {
  const mensajeEncriptado = mensaje.replace(/[A-Za-zÑñ]/g, function (match) {
    const equivalencia = equivalencias[match.toUpperCase()] || match;
    return (parseInt(equivalencia) + parseInt(modificador || 0)).toString().padStart(3, '0');
  });
  return mensajeEncriptado;
}

// Función para desencriptar un mensaje
function desencriptar(modificador, mensajeEncriptado) {
  const mensaje = mensajeEncriptado.replace(/\d{3}/g, function (match) {
    return Object.keys(equivalencias).find(key => equivalencias[key.toUpperCase()] === (parseInt(match) - parseInt(modificador || 0)).toString().padStart(3, '0')) || match;
  });
  return mensaje;
}

// Función para calcular la entropía de un mensaje
function calcularEntropia(mensaje) {
  const frecuencia = {};
  for (let i = 0; i < mensaje.length; i++) {
    const char = mensaje[i];
    if (/[A-Za-zÑñ]/.test(char)) {
      frecuencia[char] = (frecuencia[char] || 0) + 1;
    }
  }

  const longitud = mensaje.length;
  let entropia = 0;
  for (const char in frecuencia) {
    const probabilidad = frecuencia[char] / longitud;
    entropia -= probabilidad * Math.log2(probabilidad);
  }

  return entropia.toFixed(2);
}

// Función para convertir números en el mensaje a colores
function convertirNumerosAColores(mensaje) {
  const mensajeConvertido = mensaje.replace(/\d/g, function (match) {
    return colores[match] || match;
  });
  return mensajeConvertido;
}

// Función para convertir colores en el mensaje a planetas
function convertirColoresAPlanetas(mensaje) {
  // Convierte el mensaje a minúsculas y elimina espacios
  const mensajeNormalizado = mensaje.toLowerCase().replace(/\s/g, '');

  // Separa el mensaje normalizado en palabras
  const palabras = mensajeNormalizado.split('');

  // Mapea cada palabra y verifica si es un color, si lo es, lo reemplaza por el planeta correspondiente
  const mensajeConvertido = palabras.map(palabra => {
    // Verifica si la palabra es un color
    if (colores[palabra]) {
      // Si es un color, obtén el nombre del planeta correspondiente desde el objeto planetas
      const planeta = Object.keys(planetas).find(key => planetas[key] === colores[palabra]);
      // Si se encuentra un planeta correspondiente, devuelve el nombre del planeta, de lo contrario, deja la palabra sin cambios
      return planeta ? planeta : palabra;
    } else {
      // Si la palabra no es un color, déjala sin cambios
      return palabra;
    }
  }).join(' ');

  return mensajeConvertido;
}





