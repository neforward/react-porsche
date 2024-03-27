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
          <Route path="/react-porsche/contact" element={<Contact />} />
          <Route path="/react-porsche/about" element={<About />} />
          <Route path="/react-porsche/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/react-porsche/configurator" element={<Configurator />} />
          <Route path="/react-porsche/catalog" element={<Catalog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
