import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer.jsx";
import Navb from "./components/navbar/Navb.jsx";
import Home from "./views/home/Home.jsx";
import RegisterForm from "./components/registerForm/RegisterForm.jsx";
import LoginForm from "./components/loginForm/LoginForm.jsx";
import { pizzaCart } from "./utils/pizzas.js";
import { Cart } from "./views/cart/Cart.jsx";

export default function App() {
  // const [screen, setScreen] = useState("register"); // register → login → home
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  const [items, setItems] = useState(pizzaCart);

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
      {/* Navb solo recibe el estado */}
      <Navb />

      <div className="home-wrap">
        {/* {screen === "register" && (
          <RegisterForm
            className="center"
            onSuccess={(userEmail) => {
              setEmail(userEmail);
              setScreen("login");
            }}
          />
        )} */}

        {/* {screen === "login" && (
          <LoginForm
            // className="center"
            // // defaultEmail={email}
            // // onSuccess={() => {
            // //   setLoggedIn(true);
            // //   setScreen("home");
            // // }}
          />
        )} */}

        {/* {screen === "home" && <Home />} */}
        <Home />
        <Cart items={items} onInc={handleInc} onDec={handleDec} />
      </div>

      <Footer />
    </>
  );
}
