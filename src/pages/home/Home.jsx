import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/Banner.jsx";
import bannerHome from "../../assets/bannerHome.webp";
import Card from "../../components/card/Card.jsx";
import logements from "../../data/logements.json";
import "./Home.scss";

function Home() {
    const bannerTitle = "Chez vous, partout et ailleurs";
    const navigate = useNavigate();

    return (
        <section className="home">
            <Banner backgroundImage={bannerHome} title={bannerTitle} />
            <div className="cardContainer">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id}
                        id={logement.id}  
                        title={logement.title} 
                        cover={logement.cover}
                        onClick={() => navigate(`/housing/${logement.id}`)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;