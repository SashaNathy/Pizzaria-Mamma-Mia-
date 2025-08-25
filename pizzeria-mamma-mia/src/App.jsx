import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer.jsx";
import Navb from "./components/navbar/Navb.jsx";
import Home from "./views/Home.jsx";
import RegisterForm from "./components/registerForm/RegisterForm.jsx";
import LoginForm from "./components/loginForm/LoginForm.jsx";

export default function App() {
  const [screen, setScreen] = useState("register"); // register → login → home
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Navb solo recibe el estado */}
      <Navb loggedIn={loggedIn} />

      <div className="home-wrap">
        {screen === "register" && (
          <RegisterForm
            className="center"
            onSuccess={(userEmail) => {
              setEmail(userEmail);
              setScreen("login");
            }}
          />
        )}

        {screen === "login" && (
          <LoginForm
            className="center"
            defaultEmail={email}
            onSuccess={() => {
              setLoggedIn(true);                   
              setScreen("home");
            }}
          />
        )}

        {screen === "home" && <Home />}
      </div>

      <Footer />
    </>
  );
}
