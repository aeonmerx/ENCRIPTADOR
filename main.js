    const inputMensaje = document.querySelector("#mensaje");
    const inputModificador = document.querySelector("#modificador");
    const inputResultado = document.querySelector("#resultado");
    const divEntropia = document.querySelector("#entropia");
    const btnEncriptar = document.querySelector("#encriptar");
    const btnDesencriptar = document.querySelector("#desencriptar");
    const btnCopiar = document.querySelector("#copiar");
    const btnEscuchar = document.querySelector("#escuchar");
    
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

    btnCopiar.onclick = copiar;
    btnEscuchar.onclick = escuchar;
