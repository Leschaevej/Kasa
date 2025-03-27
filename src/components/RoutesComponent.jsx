// src/components/RoutesComponent.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import NotFound from "../pages/NotFound";

function RoutesComponent() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link> | <Link to="/housing">Logement</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="*" element={<NotFound />} /> {/* Page 404 */}
      </Routes>
    </>
  );
}

export default RoutesComponent;
