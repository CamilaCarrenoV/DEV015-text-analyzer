import analyzer from './analyzer.js';


const resetearboton = document.getElementById("reset-button");
const textarea = document.querySelector("textarea[name='user-input']");
function limpiar() {
    textarea.value = "";
}
function actualizar() {
  console.log("estoy en la funcion actualizar"); 
  let texto = textarea.value;
  let caracteres = analyzer.getCharacterCount(texto);
  console.log("texto", texto);
  console.log("caracteres:", caracteres);
}
resetearboton.addEventListener("click", limpiar);

textarea.addEventListener("input", actualizar);

