function configureSkryreContraption(componentsArr) {
  let validComponents = [];
  let invalidComponents = [];
  const acceptedTypes = ["power source", "connector", "circuit"];
  const componentNames = [];
  for (component of componentsArr) {
    if (
      component.hasOwnProperty("name") &&
      component.hasOwnProperty("type") &&
      component.hasOwnProperty("rating") &&
      acceptedTypes.find((acceptedType) => component.type === acceptedType) &&
      component.rating > 0
    ) {
      componentNames.push(component.name);
      validComponents.push(component);
    } else {
      invalidComponents.push(component);
    }
  }
  const hasPowerSource = validComponents.find(
    (component) => component.type === "power source"
  );
  const noDuplicateNamesSet = new Set(componentNames);
  if (
    hasPowerSource === undefined ||
    noDuplicateNamesArr.size !== componentNames.length
  ) {
    invalidComponents = invalidComponents.concat(validComponents);
    validComponents.length = 0;
  }
  const sortedComponents = { validComponents, invalidComponents };
  return sortedComponents;
}

module.exports = configureSkryreContraption;
