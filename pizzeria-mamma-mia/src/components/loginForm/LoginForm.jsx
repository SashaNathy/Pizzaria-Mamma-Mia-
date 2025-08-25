import React, { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation.js";
import "./loginForm.css";

export default function LoginForm({ onSuccess, defaultEmail = "" }) {
  const [form, setForm] = useState({ email: defaultEmail, password: "" });
  const { errors, validate } = useFormValidation({ type: "login" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(form)) {
      alert("Has iniciado sesión ✅");
      onSuccess?.(); // avanza a Home
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Inicia Sesion</h2>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
