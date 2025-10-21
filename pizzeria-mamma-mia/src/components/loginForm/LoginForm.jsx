import React, { useState, useContext } from "react";
import { useFormValidation } from "../../hooks/useFormValidation.js";
import { UserContext } from "../../context/UserContext.jsx";
import "./loginForm.css";

export const LoginForm = ({ onSuccess, defaultEmail = "" }) => {
  const [form, setForm] = useState({ email: defaultEmail, password: "" });
  const { errors, validate } = useFormValidation({ type: "login" });
  const { login, loading, error } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(form)) return;
    try {
      await login({ email: form.email, password: form.password });
      onSuccess?.(); // navega a Home, etc.
    } catch (_) {
      // el mensaje ya está en `error`
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Inicia Sesion</h2>

      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        autoComplete="username"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Password"
        autoComplete="current-password"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
};
