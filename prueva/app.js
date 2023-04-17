let input = document.getElementById("texto");

function encriptar(mensaje) {
    mensaje = mensaje.toLowerCase();
    mensaje = mensaje.replaceAll('e', 'enter');
    mensaje = mensaje.replaceAll('i', 'imes');
    mensaje = mensaje.replaceAll('a', 'ai');
    mensaje = mensaje.replaceAll('o', 'ober');
    mensaje = mensaje.replaceAll('u', 'ufat');
    console.log(mensaje);
    document.getElementById("no-text-output").style.display = "none";
    document.getElementById("text-output").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
    document.getElementById("texto-final").innerHTML = mensaje;
}

function desencriptar(mensaje) {
    mensaje = mensaje.toLowerCase();
    mensaje = mensaje.replaceAll('enter', "e");
    mensaje = mensaje.replaceAll('imes', "i");
    mensaje = mensaje.replaceAll('ai', "a");
    mensaje = mensaje.replaceAll('ober', "o");
    mensaje = mensaje.replaceAll('ufat', "u");
    console.log(mensaje);
    document.getElementById("no-text-output").style.display = "none";
    document.getElementById("text-output").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
    document.getElementById("texto-final").innerHTML = mensaje;
}

let text = document.getElementById('texto-final').innerHTML;
const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}