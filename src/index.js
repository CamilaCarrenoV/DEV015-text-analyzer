import analyzer from './analyzer.js';


const resetearboton = document.getElementById("reset-button");
const texto = document.querySelector("textarea[name='user-input']");
function limpiar() {
    texto.value = "";
}

resetearboton.addEventListener("click", limpiar);
