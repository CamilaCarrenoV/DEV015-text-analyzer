import analyzer from './analyzer.js';

const caracteres = document.querySelector(".item[data-testid='character-count']");
const palabras = document.querySelector(".item[data-testid='word-count']");
const caracteressinespacio = document.querySelector(".item[data-testid='character-no-spaces-count']");
const numeros = document.querySelector(".item[data-testid='number-count']");
const sumanumeros = document.querySelector(".item[data-testid=number-sum]");
const longitudpalabras = document.querySelector(".item[data-testid='word-length-average']");
const resetearboton = document.getElementById("reset-button");
const textarea = document.querySelector("textarea[name='user-input']");


function actualizar() {
  let texto = textarea.value;
  let numerocaracteres = analyzer.getCharacterCount(texto);
  caracteres.innerHTML = "Caracteres: " + numerocaracteres;

  let numeropalabras = analyzer.getWordCount(texto);
  palabras.innerHTML = "Palabras: " + numeropalabras;

  let numerocaractessinespacio = analyzer.getCharacterCountExcludingSpaces(texto);
  caracteressinespacio.innerHTML = "Caracteres sin espacio: " + numerocaractessinespacio;

  let conteonumeros = analyzer.getNumberCount(texto);
  numeros.innerHTML = "Números: " + conteonumeros;

  let sumatotalnumeros = analyzer.getNumberSum(texto);
  sumanumeros.innerHTML = "Suma números: " + sumatotalnumeros;

  let longitudmediapalabras = analyzer.getAverageWordLength(texto);
  longitudpalabras.innerHTML = "promedio longuitud: " + longitudmediapalabras;
};

function limpiar() {
  textarea.value = "";
}

textarea.addEventListener("input", actualizar);
resetearboton.addEventListener("click", limpiar);


