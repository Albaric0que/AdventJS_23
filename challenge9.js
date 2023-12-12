function adjustLights(lights) {
  let lightsChanges = 0;
  let lightsChangesReverse = 0;
  let reverseLights = [...lights].reverse();

  for (let i = 1; i < lights.length; i++) {
    if (lights[i] === lights[i - 1]) {
      lightsChanges++;
      lights[i] = lights[i] === "🟢" ? "🔴" : "🟢";
    }
    if (reverseLights[i] === reverseLights[i - 1]) {
      lightsChangesReverse++;
      reverseLights[i] = reverseLights[i] === "🟢" ? "🔴" : "🟢";
    }
  }
  return lightsChanges > lightsChangesReverse
    ? lightsChangesReverse
    : lightsChanges;
}
