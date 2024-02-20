import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feature from "./components/feature/Feature";
import Home from "./components/home/Home";
import Protection from "./components/protection/Protection";
import Service from "./components/service/Service";
import Status from "./components/status/Status";
import Pricing from "./components/pricing/Pricing";
import Client from "./components/client/Client";
import Benifit from "./components/benefit/Benifit";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Feature />
        <Protection />
        <Service />
        <Status />
        <Pricing />
        <Client />
        <Benifit />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
