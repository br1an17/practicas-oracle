const inputTexT = document.getElementById("input");
const btnEncoder = document.getElementById("boton");
const btnDecoder = document.getElementById("botonDecodedificador");
const message = document.getElementById("mensaje");
const btnCopy = document.getElementById("copiar");
const copy = document.getElementById("textoCopiado");

let vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let vowelsEncoder = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const validation = () => {
  if (inputTexT.value === "") {
    document.querySelector(".decodificadorMensaje").style.display =
      "block";
    document.querySelector(".decodificadorMensaje2").style.display =
      "none";
  } else {
    document.querySelector(".decodificadorMensaje").style.display =
      "none";
    document.querySelector(".decodificadorMensaje2").style.display =
      "block";
  }
};

const encoder = () => {
  const encryptedText = (input) => {
    let newInput = "";
    newInput = input.replace(/[aeiou]/g, (i) => vowels[i]);
    return newInput;
  };
  message.value = encryptedText(inputTexT.value);
};

const decoder = () => {
  const decryptedText = (input) => {
    let newInput = "";
    newInput = input.replace(
      /ai|enter|imes|ober|ufat/g,
      (i) => vowelsEncoder[i]
    );
    return newInput;
  };
  message.value = decryptedText(inputTexT.value);
};

btnEncoder.addEventListener("click", validation);
btnEncoder.addEventListener("click", encoder);
btnDecoder.addEventListener("click", validation);
btnDecoder.addEventListener("click", decoder);
btnCopy.addEventListener("click", (e) => {
  e.preventDefault();
  message.select();
  message.setSelectionRange(0, 99999);
  setTimeout(() => {
    navigator.clipboard
      .writeText(message.value)
      .then(() => {
        copy.textContent = "Se ha copiado exitosamente!";
        setTimeout(() => window.location.reload(), 1500);
      })
      .catch(() => {
        copy.textContent = "Algo salió mal!";
      });
  }, 1000);
  navigator.reset();
});
