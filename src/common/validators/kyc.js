const nameValidator = (name) =>
  !name ? "Missing name" : typeof name !== "string" ? "Wrong type." : null;
const descriptionValidator = (description) =>
  !description
    ? "Missing description"
    : typeof description !== "string"
    ? "Wrong type."
    : null;

export { nameValidator, descriptionValidator };
