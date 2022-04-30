const bcAddressValidator = (bcAddress) =>
  !bcAddress
    ? "Missing blockchain address"
    : typeof bcAddress !== "string"
    ? "Wrong type."
    : null;

export { bcAddressValidator };
