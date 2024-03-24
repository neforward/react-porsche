import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Configurator from "./pages/Configurator";
import Contact from "./pages/Contacts";
import Home from "./pages/Home";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/react-porsche/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
