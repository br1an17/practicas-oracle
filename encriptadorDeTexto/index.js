const texto = document.getElementById("textoE")
const textoCopiar = document.getElementById("textoC")
const botonCopiar = document.getElementById("copiar")
const botonEncriptar = document.getElementById("encriptar")
const botonDesencriptar = document.getElementById("desencriptar")

const encriptar = (e) =>  {
e.preventDefault( console.log(texto.value))
textoCopiar.value = texto.value
texto.value = ""
}
const desencriptar = (e) =>  {
e.preventDefault( console.log(texto.value))
textoCopiar.value = texto.value
}


const copiar = (e) =>  {
    e.preventDefault( console.log(texto.value))
    textoCopiar.value = texto.value

    }



botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
botonCopiar.onclick = copiar