# 🍕 Pizzería Mamma Mía — Hito 2

Objetivo

Implementar un mini flujo Register → Login → Home sin persistencia y sin useContext, con render dinámica controlada desde App.jsx.


1) Register (componente RegisterForm)

Campos: Email, Contraseña, Confirmar contraseña.

Validaciones mínimas:

Todos los campos obligatorios (no vacíos).

Password ≥ 6 caracteres.

Password y Confirmación iguales.

Al enviar:

Si todo OK → mensaje de éxito y avanzar a Login.

Si hay errores → mensaje de error y no avanza.

2) Login (componente LoginForm)

Campos: Email, Contraseña.

Validaciones mínimas:

Todos los campos obligatorios.

Password ≥ 6 caracteres.

Al enviar:

Si todo OK → mensaje de éxito y avanzar a Home.

Si hay errores → mensaje de error.

3) Render dinámica (en App.jsx)

screen: controla la vista actual (por defecto register).

loggedIn: true/false según resultado de Login.

Flujo: register (OK) → login (OK) → home.

Navb solo refleja loggedIn (no cambia estados por click).