import "./App.css";
import Cards from "./components/cardpizza/CardPizza";
import { Footer } from "./components/footer/Footer";
import Navb from "./components/navbar/Navb";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Navb />
      {/* div creado solo para estilo de plantilla */}
      <div className="home-wrap">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
