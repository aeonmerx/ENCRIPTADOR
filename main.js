// AQUI VA A ESTAR NUESTRO CODIGO JAVASCRIPT
const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");
 function encriptar(){
    var mensaje = inputMensaje.value; 
    var mensajeEncriptado = mensaje
    .replaceAll("a","693")
    .replaceAll("e","417")
    .replaceAll("i","333")
    .replaceAll("o","555")
    .replaceAll("u","777")
    .replaceAll("b","000");
    inputResultado.value = mensajeEncriptado ;
 }
 function desencriptar(){
    var mensajeEncriptado = inputMensaje.value; 
    var mensaje = mensajeEncriptado
    .replaceAll("693","a")
    .replaceAll("417","e")
    .replaceAll("333","i")
    .replaceAll("555","o")
    .replaceAll("777","u")
    .replaceAll("000","b");;
    inputResultado.value = mensaje; 
 }
 function escuchar(){
    var mensajeEncriptado = inputResultado.value; 
    let msg= new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
 }
 function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
 }
 btnEncriptar.onclick = encriptar;
 btnDesencriptar.onclick = desencriptar;
 btnCopiar.onclick = copiar;
 btnEscuchar.onclick = escuchar ;