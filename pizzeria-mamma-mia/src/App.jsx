import { Routes, Route, Navigate } from "react-router-dom";
import { Cart, Home, NotFound, PizzaDetail, Profile } from "./views/index.js";
import { Footer, LoginForm, Navb, RegisterForm } from "./components/index.js";
import { CartProvider } from "./context/CartContext.jsx";
import "./App.css";
import { PizzaProvider } from "./context/PizzaContext.jsx";
import { UserContext, UserProvider } from "./context/UserContext.jsx";
import { useContext } from "react";

// Estos wrappers existen porque los hooks (useContext) solo pueden usarse dentro de componentes
// Al estar bajo <UserProvider> pueden leer el token y decidir
function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to="/login" replace />;
}

function GuestRoute({ children }) {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" replace /> : children;
}

export default function App() {
  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <Navb />
          <div className="home-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <GuestRoute>
                    <LoginForm />
                  </GuestRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <GuestRoute>
                    <RegisterForm />
                  </GuestRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<PizzaDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}
