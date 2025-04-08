import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Housing from "../pages/housing/Housing";
import NotFound from "../pages/notFound/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
