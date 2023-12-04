/* Write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made. */

function manufacture(gifts, materials) {
  function canMakeGift(gift) {
    // Helper que verifica si se puede hacer un regalo en particular.
    const giftMaterials = gift.split(""); // Dividimos los regalos en sus materiales (letras) con el método split().
    for (const material of giftMaterials) {
      //Creamos un bucle que recorre cada material (letra) del nuevo array.
      if (!materials.includes(material)) {
        // Comprobamos si materiales incluyen cada uno de nuestros material (letras).
        return false;
      } // Si están incluidos, es decir si el regalo se puede hacer devuelve true, si no false.
    }
    return true;
  }

  const madeGifts = gifts.filter(canMakeGift); // Creamos un nuevo array con los regalos que se pueden hacer utilizando
  // filter() al que le pasamos como parametro la función auxiliar canMakeGift.
  return madeGifts; // filter() se usa para crear un nuevo array con los elementos que cumplen una
} // condición específica. La condición, en este caso, viene dada por la función
// canMakeGift que devuelvía true si el regalo se podía hacer.
