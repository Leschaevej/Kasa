import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Housing from "../pages/housing/Housing";
import NotFound from "../pages/notFound/NotFound";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;