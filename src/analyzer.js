const analyzer = {  
  getWordCount: (text) => {
    let palabras = text.trim().split(/\s+/);
    return palabras.length;
  },

 //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getCharacterCount: (text) => {
    return text.length;
  },
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  
  getCharacterCountExcludingSpaces: (text) => {
    let sinespacionipuntuacion = text.replace(/[^a-zA-Z0-9]/g, '');
    return sinespacionipuntuacion.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => {  
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    const regex = /\d+/g;
    const coincidencias = text.match(regex);
    if(!coincidencias){
      return 0;
    }
    return coincidencias.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },

};

export default analyzer;
