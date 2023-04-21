// const texto = document.getElementById("textoE")
// const textoCopiar = document.getElementById("textoC")
// const botonCopiar = document.getElementById("copiar")
// const botonEncriptar = document.getElementById("encriptar")
// const botonDesencriptar = document.getElementById("desencriptar")

// const encriptar = (e) =>  {
// e.preventDefault( console.log(texto.value))
// textoCopiar.value = texto.value
// texto.value = ""
// }
// const desencriptar = (e) =>  {
// e.preventDefault( console.log(texto.value))
// textoCopiar.value = texto.value
// }


// const copiar = (e) =>  {
   
//     textoCopiar.value = texto.value

// e.preventDefault( console.log(textoCopiar.value)) }



// botonEncriptar.onclick = encriptar
// botonDesencriptar.onclick = desencriptar
// botonCopiar.onclick = copiar
function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);


function desencriptar() {
    var texto = document.querySelector("#input-text").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};
function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};