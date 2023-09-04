<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Encriptador con Modificador</title>
</head>
<body>
  <input type="text" id="mensaje" placeholder="Ingrese un mensaje">
  <input type="text" id="modificador" placeholder="Ingrese un modificador">
  <input type="button" id="encriptar" value="Encriptar">
  <input type="button" id="desencriptar" value="Desencriptar">
  <input type="button" id="copiar" value="Copiar">
  <input type="button" id="escuchar" value="Escuchar">
  <input type="text" id="resultado" readonly>
  
  <script>
    const inputMensaje = document.querySelector("#mensaje");
    const inputModificador = document.querySelector("#modificador");
    const inputResultado = document.querySelector("#resultado");
    const btnEncriptar = document.querySelector("#encriptar");
    const btnDesencriptar = document.querySelector("#desencriptar");
    const btnCopiar = document.querySelector("#copiar");
    const btnEscuchar = document.querySelector("#escuchar");
    
    function encriptar() {
      const mensaje = inputMensaje.value;
      const modificador = inputModificador.value;
      const mensajeEncriptado = mensaje.replace(/[A-Za-zÑñ]/g, function (match) {
        const equivalencia = equivalencias[match.toUpperCase()] || match;
        return (parseInt(equivalencia) + parseInt(modificador)).toString().padStart(3, '0');
      });
      inputResultado.value = mensajeEncriptado;
    }
    
    function desencriptar() {
      const mensajeEncriptado = inputMensaje.value;
      const modificador = inputModificador.value;
      const mensaje = mensajeEncriptado.replace(/\d{3}/g, function (match) {
        return Object.keys(equivalencias).find(key => equivalencias[key.toUpperCase()] === (parseInt(match) - parseInt(modificador)).toString().padStart(3, '0')) || match;
      });
      inputResultado.value = mensaje;
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
    
    btnEncriptar.onclick = encriptar;
    btnDesencriptar.onclick = desencriptar;
    btnCopiar.onclick = copiar;
    btnEscuchar.onclick = escuchar;
    
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
  </script>
</body>
</html>
