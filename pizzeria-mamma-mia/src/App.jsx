import { Routes, Route } from "react-router-dom";
import { Cart, Home, NotFound, PizzaDetail, Profile } from "./views/index.js";
import { Footer, LoginForm, Navb, RegisterForm } from "./components/index.js";
import { CartProvider } from "./context/CartContext.jsx";
import "./App.css";
import { PizzaProvider } from "./context/PizzaContext.jsx";

export default function App() {
  const url = "http://localhost:5000/api/pizzas";

  return (
    <PizzaProvider>
      <CartProvider>
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
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/pizza/p001"
              element={<PizzaDetail url={url} id="p001" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </PizzaProvider>
  );
}
