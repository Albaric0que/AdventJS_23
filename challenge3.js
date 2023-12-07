/* You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string. */

function findNaughtyStep(original, modified) {
  if (original === modified) {
    return "";
  }

  let differentElement = 0;

  for (let i = 0; original[i] === modified[i]; i++) {
    differentElement += 1;
  }

  return original.length > modified.length
    ? original[differentElement]
    : modified[differentElement];
}
