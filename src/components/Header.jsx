import { Link } from "react-router-dom";
import "../assets/Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Kasa</h1>
      <img src="./src/assets/images/logo.png"></img>
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