const nameValidator = (name) =>
  !name
    ? "Missing agent name"
    : typeof name !== "string"
    ? "Wrong type."
    : name.length > 40
    ? "Maximum name length is 40"
    : null;
const descriptionValidator = (description) =>
  !description
    ? "Missing description"
    : typeof description !== "string"
    ? "Wrong type."
    : description.length > 200
    ? "Maximum description length is 200"
    : null;

export { nameValidator, descriptionValidator };
