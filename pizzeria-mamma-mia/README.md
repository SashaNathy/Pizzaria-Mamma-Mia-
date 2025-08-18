# 🍕 Pizzería Mamma Mía — Hito 1

Proyecto listo y servido. Abajo detallo **lo que YA está hecho** (sin vueltas).

## ✅ Qué incluye este hito

- **Estructura principal montada**
  - `App.jsx` renderiza **Navb**, **Home** y **Footer**.
  - Se usa **Vite + React** (con **React-Bootstrap/Bootstrap** para estilos responsivos).

- **Navbar funcional (condicional por login)**
  - Ítems siempre visibles: **🍕 Home** y **🛒 Total: $**.
  - Render condicional con `useState` (`token`):  
    - `token === false` → **🔓 Login** y **📄 Register**.  
    - `token === true` → **📄 Profile** y **🔐 Logout**.
  - Click en **Login/Logout** alterna `token` (sin `useEffect`, tal como se pidió).
  - **Total** se muestra con separador de miles usando `toLocaleString('es-CL')` → `25.000`.

- **Home + Header**
  - `Home` incluye el componente **Header** con **título** y **descripción** de la pizzería.
  - Estilos aplicados (centrado y, opcionalmente, fondo/altura si se necesita).

- **Tarjetas de pizzas (3 en total)**
  - Componente **`CardPizza`** recibe props: `name`, `price`, `ingredients[]`, `img`.
  - **Ingredientes** mostrados **separados por coma y espacio** (`join(', ')`).
  - `price` mostrado con `toLocaleString('es-CL')`.
  - Botones **“Ver más”** y **“Añadir”** (sin lógica, tal como pide el hito).

- **Footer**
  - Texto exacto: `© 2021 - Pizzería Mamma Mía! - Todos los derechos reservados`.
  - Estilizado con **bg-dark** + **text-white**, centrado.

## 🛠️ Detalles técnicos aplicados

- **Formateo de miles**: `total.toLocaleString('es-CL', { minimumFractionDigits: 0 })`.  
  (Opcional: se dejó listo un util `formatCL(n)` para reutilizar si se desea).
- **Condicionales**: ternarios y/o cortocircuito según `token`.
- **Centrado y layout**: utilidades de Bootstrap (`d-flex`, `align-items-center`, `text-center`, `gap`, etc.).
- **Imágenes**: `alt` aplicado y URLs en una sola línea.

## ▶️ Cómo correr

```bash
npm i
npm run dev

