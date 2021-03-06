const usernameValidator = (userName) =>
  !userName
    ? "Missing username."
    : typeof userName !== "string"
    ? "Wrong type."
    : null;

const passwordValidator = (password) =>
  !password
    ? "Missing password."
    : typeof password !== "string"
    ? "Wrong type."
    : password.length < 6
    ? "Minimum password length is 6."
    : password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]).{6,}$/
      )
    ? null
    : "Password must have a lowercase, uppercase, digits and special character.";

export { usernameValidator, passwordValidator };
