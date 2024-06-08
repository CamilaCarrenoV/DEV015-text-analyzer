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
  const texto = textarea.value;

  const numerocaracteres = analyzer.getCharacterCount(texto);
  caracteres.innerHTML = "Caracteres: " + numerocaracteres;

  const numeropalabras = analyzer.getWordCount(texto);
  palabras.innerHTML = "Palabras: " + numeropalabras;

  const numerocaractessinespacio = analyzer.getCharacterCountExcludingSpaces(texto);
  caracteressinespacio.innerHTML = "Caracteres sin espacio: " + numerocaractessinespacio;

  const conteonumeros = analyzer.getNumberCount(texto);
  numeros.innerHTML = "Números: " + conteonumeros;

  const sumatotalnumeros = analyzer.getNumberSum(texto);
  sumanumeros.innerHTML = "Suma de números: " + sumatotalnumeros;

  const longitudmediapalabras = analyzer.getAverageWordLength(texto);
  longitudpalabras.innerHTML = "Promedio de longuitud de palabras: " + longitudmediapalabras;
}

function limpiar() {
  textarea.value = "";
  caracteres.innerHTML = "Caracteres: ";
  palabras.innerHTML = "Palabras: ";
  caracteressinespacio.innerHTML = "Caracteres sin espacio: ";
  numeros.innerHTML = "Números: ";
  sumanumeros.innerHTML = "Suma de números: ";
  longitudpalabras.innerHTML = "Promedio de longuitud de palabras: ";
}

textarea.addEventListener("input", actualizar);
resetearboton.addEventListener("click", limpiar);


