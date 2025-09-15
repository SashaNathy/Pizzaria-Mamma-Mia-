import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Cart, Home, NotFound, PizzaDetail, Profile } from "./views/index.js";
import { Footer, LoginForm, Navb, RegisterForm } from "./components/index.js";
import { pizzaCart } from "./utils/pizzas.js";
import "./App.css";

export default function App() {
  const [items, setItems] = useState(pizzaCart);
  const url = "http://localhost:5000/api/pizzas";

  const handleInc = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, count: it.count + 1 } : it))
    );
  };

  const handleDec = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id && it.count > 1 ? { ...it, count: it.count - 1 } : it
      )
    );
  };

  return (
    <>
      <Navb />
      <div className="home-wrap">
        <Routes>
          <Route path="/" element={<Home url={url} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/profile"
            element={
              <Profile
                email="usuario@correo.com"
                onLogout={() => alert("Sesión cerrada")}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart items={items} onInc={handleInc} onDec={handleDec} />}
          />
          <Route
            path="/pizza/p001"
            element={<PizzaDetail url={url} id="p001" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
