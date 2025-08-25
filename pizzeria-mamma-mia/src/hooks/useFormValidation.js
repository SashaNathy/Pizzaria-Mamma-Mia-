import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validator";

export function useFormValidation(opts = {}) {
  const { type = "register" } = opts; // "register" o "login"
  const [errors, setErrors] = useState({});

  function validate(values) {
    const errs = {};
    const { email = "", password = "", confirm = "" } = values;

    // Obligatorios
    if (!email.trim()) errs.email = "El email es obligatorio.";
    if (!password) errs.password = "La contraseña es obligatoria.";
    if (type === "register" && !confirm)
      errs.confirm = "Debes confirmar la contraseña.";

    // Email
    if (!errs.email && !validateEmail(email)) {
      errs.email = "Email inválido.";
      alert("Email inválido.");
    }

    // Password (complejidad + largo)
    if (!errs.password && !validatePassword(password)) {
      errs.password =
        "La contraseña debe incluir minúscula, mayúscula, número y símbolo.";
      alert(
        "La contraseña debe incluir minúscula, mayúscula, número y símbolo."
      );
    }
    if (!errs.password && password.length < 6) {
      errs.password = "La contraseña debe tener al menos 6 caracteres.";
      alert("La contraseña debe tener al menos 6 caracteres.");
    }

    // Confirmación solo en registro
    if (type === "register" && !errs.confirm && confirm !== password) {
      errs.confirm = "Las contraseñas no coinciden.";
      alert("Las contraseñas deben ser iguales");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  return { errors, validate };
}
