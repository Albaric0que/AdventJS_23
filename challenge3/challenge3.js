/* You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string. */

function findNaughtyStep(original, modified) {
  if (original === modified) {
    //Comparamos si los dos string son iguales y si lo son devolvemos un string vacio.
    return "";
  }

  let differentElement = 0; // Inicializamos una variable donde almacenaremos el índice del elemento diferente.

  for (let i = 0; original[i] === modified[i]; i++) {
    // Creamos un bucle que recorrerá los strings mientras los indices sean
    differentElement += 1; // iguales y por cada índice igual sumará uno a differentElement.
  }

  return original.length > modified.length //Devolvemos directamente el resultado de un condicional ternario por el que
    ? original[differentElement] // si la longitud de original es mas grande devolverá el elemento diferente en
    : modified[differentElement]; // el string original, si modified es diferente devolverá el elemento diferente en
} // modified. Conseguimos esto gracias al índice numeral almacenado en differentElement
