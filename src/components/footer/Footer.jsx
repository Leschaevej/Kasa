import "./Footer.scss";
import logoFooter from "../../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer>
        <img src={logoFooter} alt="Logo Footer" />
        <p>&copy; 2025 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;