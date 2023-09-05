    const inputMensaje = document.querySelector("#mensaje");
    const inputModificador = document.querySelector("#modificador");
    const inputResultado = document.querySelector("#resultado");
    const divEntropia = document.querySelector("#entropia");
    const btnEncriptar = document.querySelector("#encriptar");
    const btnDesencriptar = document.querySelector("#desencriptar");
    const btnCopiar = document.querySelector("#copiar");
    const btnEscuchar = document.querySelector("#escuchar");
    const btnConvertirNumerosColores = document.querySelector("#convertirNumerosColores"); // Agregado
    const btnConvertirColoresNumeros = document.querySelector("#convertirColoresNumeros"); // Agregado
const btnConvertirPlanetasColores = document.querySelector("#convertirPlanetasColores"); // Nuevo botón
const btnConvertirColoresPlanetas = document.querySelector("#convertirColoresPlanetas"); // Nuevo botón

    
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

    function encriptar(modificador) {
      const mensaje = inputMensaje.value;
      const mensajeEncriptado = mensaje.replace(/[A-Za-zÑñ]/g, function (match) {
        const equivalencia = equivalencias[match.toUpperCase()] || match;
        return (parseInt(equivalencia) + parseInt(modificador || 0)).toString().padStart(3, '0');
      });
      inputResultado.value = mensajeEncriptado;
      calcularEntropia(mensajeEncriptado);
    }
    
    function desencriptar(modificador) {
      const mensajeEncriptado = inputMensaje.value;
      const mensaje = mensajeEncriptado.replace(/\d{3}/g, function (match) {
        return Object.keys(equivalencias).find(key => equivalencias[key.toUpperCase()] === (parseInt(match) - parseInt(modificador || 0)).toString().padStart(3, '0')) || match;
      });
      inputResultado.value = mensaje;
      calcularEntropia(mensaje);
    }

    function copiar() {
      var mensajeEncriptado = inputResultado.value;
      navigator.clipboard.writeText(mensajeEncriptado);
    }
    
    function escuchar() {
      var mensajeEncriptado = inputResultado.value;
      let msg = new SpeechSynthesisUtterance();
      msg.text = mensajeEncriptado;
      msg.lang = "es-Es";
      window.speechSynthesis.speak(msg);
    }
    
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

      divEntropia.innerHTML = `Entropía del mensaje: ${entropia.toFixed(2)}`;
    }

    btnEncriptar.onclick = () => {
      const modificador = inputModificador.value;
      encriptar(modificador);
    };
    
    btnDesencriptar.onclick = () => {
      const modificador = inputModificador.value;
      desencriptar(modificador);
    };
function convertirNumerosColores() {
  const mensaje = inputResultado.value;
  const mensajeConvertido = mensaje.replace(/\d/g, function (match) {
    return `<span class="color${match}">${colores[match]}</span> `;
  });
  // Mostrar los colores en el input
  inputResultado.value = mensajeConvertido.trim(); // Eliminar espacios en blanco al principio y al final
  // Mostrar los colores en el nuevo div
  document.querySelector("#coloresResultado").innerHTML = mensajeConvertido;
}

function convertirColoresNumeros() {
  const mensaje = inputResultado.value;
  const mensajeConvertido = mensaje.replace(/<span class="color(\d+)">(.+?)<\/span>/g, function (match, numero, colorName) {
    const colorNumero = Object.keys(colores).find(key => colores[key] === colorName);
    return colorNumero !== undefined ? colorNumero : match;
  });
  // Mostrar el resultado en el input sin espacios entre números
  inputResultado.value = mensajeConvertido.replace(/\s/g, '');
  // Limpiar el contenido del div
  document.querySelector("#coloresResultado").innerHTML = '';
}
function convertirColoresPlanetas() {
  const mensaje = inputResultado.value;
  const divColoresResultado = document.querySelector("#coloresResultado");

  // Definir un objeto de mapeo de colores a planetas
  const coloresAPlanetas = {
    'amarillo': 'sol',
    'azul': 'venus',
    'rojo': 'marte',
    'verde': 'tierra',
    'naranja': 'mercurio',
    'café': 'jupiter',
    'negro': 'saturno',
    'violeta': 'urano',
    'gris': 'luna'
  };

  // Reemplazar los colores por planetas en el mensaje
  const mensajeConvertido = mensaje.replace(/<span class="color(\d+)">(.+?)<\/span>/g, function (match, numero, colorName) {
    const planeta = coloresAPlanetas[colorName];
    if (planeta) {
      return `<span class="planeta">${planeta}</span>`;
    }
    return match;
  });

  // Mostrar el resultado en el input
  inputResultado.value = mensajeConvertido;

  // Mostrar los planetas en el div
  divColoresResultado.innerHTML = mensajeConvertido;
}
function convertirPlanetasColores() {
      const mensaje = inputResultado.value;
      const divColoresResultado = document.querySelector("#coloresResultado");

      // Definir un objeto de mapeo de planetas a colores
      const planetasAColores = {
        'sol': 'amarillo',
        'venus': 'azul',
        'marte': 'rojo',
        'tierra': 'verde',
        'mercurio': 'naranja',
        'jupiter': 'café',
        'saturno': 'negro',
        'urano': 'violeta',
        'luna': 'gris'
      };

      // Reemplazar los planetas por colores en el mensaje
      const mensajeConvertido = mensaje.replace(/\b\w+\b/g, function (match) {
        const color = planetasAColores[match.toLowerCase()];
        if (color) {
          // Reemplaza el planeta por el color y agrega la clase "color" seguida del número
          const colorNumero = Object.keys(colores).find(key => colores[key] === color);
          return `<span class="color${colorNumero}">${color}</span> `;
        }
        return match;
      });

      // Mostrar el resultado en el input
      inputResultado.value = mensajeConvertido;

      // Mostrar los colores en el nuevo div
      divColoresResultado.innerHTML = mensajeConvertido;
    }

    


    btnConvertirNumerosColores.onclick = convertirNumerosColores;
    btnConvertirColoresNumeros.onclick = convertirColoresNumeros;
    btnConvertirColoresPlanetas.onclick = convertirColoresPlanetas;
    btnConvertirPlanetasColores.onclick = convertirPlanetasColores;
    btnCopiar.onclick = copiar;
    btnEscuchar.onclick = escuchar;
