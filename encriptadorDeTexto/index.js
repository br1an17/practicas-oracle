
// function copiar() {
//     navigator.clipboard.writeText(
//         document.getElementById("encrypted-text").value
//     );
// }
// document.querySelector("#boton-copiar").addEventListener("click", copiar);


// function desencriptar() {
//     var texto = document.querySelector("#input-text").value;
//     texto = texto
//         .replace(/enter/gi, "e")
//         .replace(/imes/gi, "i")
//         .replace(/ai/gi, "a")
//         .replace(/ober/gi, "o")
//         .replace(/ufat/gi, "u");
//     document.getElementById("encrypted-text").value = texto;
// }

// var boton = document.getElementById("boton-desencriptar");
// boton.onclick = function () {
//     if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
//         desencriptar();
//     } else {
//         alert("Solo se permiten letras minusculas, sin caracteres especiales.")
//     }
// };
// function encriptar() {
//     var texto = document.getElementById("input-text").value;
//     texto = texto
//         .replace(/e/gi, "enter")
//         .replace(/i/gi, "imes")
//         .replace(/a/gi, "ai")
//         .replace(/o/gi, "ober")
//         .replace(/u/gi, "ufat");
//     document.getElementById("encrypted-text").value = texto;
// }

// var boton = document.getElementById("boton-encriptar");
// boton.onclick = function () {    
//     if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
//         encriptar();
//     } else {
//         alert("Solo se permiten letras minusculas, sin caracteres especiales.")
//     }
// };
const inputTexT = document.getElementById('input--text');
const btnEncoder = document.getElementById('btn--encoder');
const btnDecoder = document.getElementById('btn--decoder');
const message = document.getElementById('message');
const btnCopy = document.getElementById('btn--copy');
const copy = document.getElementById('copied--text');

let vowels = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

let vowelsEncoder = {
    'ai'    : 'a',
    'enter' : 'e',
    'imes'  : 'i',
    'ober'  : 'o',
    'ufat'  : 'u'
}


const validation = () => {
    if (inputTexT.value === '') {
        document.querySelector('.decoder__content--messageDefauld').style.display = 'block';
        document.querySelector('.decoder__content--decoderMessage').style.display = 'none';
        
    } else {
        document.querySelector('.decoder__content--messageDefauld').style.display = 'none';
        document.querySelector('.decoder__content--decoderMessage').style.display = 'block';
    }    
}

const encoder = () => {
    const encryptedText = (input) => {
        let newInput = '';
        newInput = input.replace(/[aeiou]/g, i => vowels[i]);
        return newInput;
    }
    message.value = encryptedText(inputTexT.value);
}

const decoder = () => {
    const decryptedText = (input) => {
        let newInput = '';
        newInput = input.replace(/ai|enter|imes|ober|ufat/g, i => vowelsEncoder[i]);
        return newInput;
    }
    message.value = decryptedText(inputTexT.value);
}

btnEncoder.addEventListener('click', validation);
btnEncoder.addEventListener('click', encoder);
btnDecoder.addEventListener('click', validation);
btnDecoder.addEventListener('click', decoder);
btnCopy.addEventListener('click', (e) => {
    e.preventDefault();
    message.select();
    message.setSelectionRange(0, 99999);
    setTimeout(() => {
    navigator.clipboard.writeText(message.value)
        .then(() => {
             copy.textContent = "Se ha copiado exitosamente! 😉";
             setTimeout(() => window.location.reload(), 1500)
             
            })
            .catch(() => {
                copy.textContent = "Algo salió mal! 😔";
            });  
        }, 1000)
    navigator.reset();    
});



