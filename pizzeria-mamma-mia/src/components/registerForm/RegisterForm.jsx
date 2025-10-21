import { useState, useContext } from "react";
import { useFormValidation } from "../../hooks/useFormValidation.js";
import { UserContext } from "../../context/UserContext.jsx";

export const RegisterForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const { errors, validate } = useFormValidation({ type: "register" });
  const { register, loading, error } = useContext(UserContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate(form)) return;
    try {
      await register({ email: form.email, password: form.password });
      onSuccess?.(form.email); // si luego autocompletas el login con este mail
    } catch (_) {
      // el mensaje ya está en `error`
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ maxWidth: 380, margin: "2rem auto", display: "grid", gap: 12 }}
    >
      <h2>Registro</h2>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
        />
      </label>
      {errors.email && (
        <small style={{ color: "crimson" }}>{errors.email}</small>
      )}

      <label>
        Contraseña
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
        />
      </label>
      {errors.password && (
        <small style={{ color: "crimson" }}>{errors.password}</small>
      )}

      <label>
        Confirmar contraseña
        <input
          name="confirm"
          type="password"
          value={form.confirm}
          onChange={onChange}
        />
      </label>
      {errors.confirm && (
        <small style={{ color: "crimson" }}>{errors.confirm}</small>
      )}

      {error && <p style={{ color: "crimson", marginTop: 4 }}>{error}</p>}

      <button type="submit" style={{ marginTop: 8 }} disabled={loading}>
        {loading ? "Creando..." : "Crear cuenta"}
      </button>
    </form>
  );
};
