/* Día 1 
Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1. */

function findFirstRepeated(gifts) {
  let seenNumber = []; // Arreglo vacio para para realizar seguimiento de los números que hemos visto en la iteración.
  let repeatedNumber; // Variable para almacenar el número repetido si lo encontramos.

  for (let i = 0; i < gifts.length; i++) {
    // Bucle para iterar el arreglo gifts.
    if (seenNumber[gifts[i]] !== undefined) {
      //En cada iteración se comprueba si el numero en gifts ya ha sido visto antes, si ha sido visto antes es una repetición.
      repeatedNumber = gifts[i]; // Se asigna el número que se repite a la variable repeatedNumber y usamos break para salir del bucle.
      break;
    }
    seenNumber[gifts[i]] = i; // Si no hemos visto el numero antes (importante) lo añadimos al arreglo seenNumber.
  }
  if (repeatedNumber !== undefined) {
    // Después de romper el bucle verificamos si se ha encontrado un número repetido.
    return repeatedNumber; //Si se ha encontrado se devuelve como resultado.
  } else {
    return -1; //si no se ha encontrado se devuelve -1.
  }
}
