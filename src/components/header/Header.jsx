import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <h1>Kasa</h1>
      <img src={logo} alt="Kasa" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;