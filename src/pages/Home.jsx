import Banner from '../components/Banner.jsx';
import bannerHome from '../assets/images/bannerHome.webp';
import Card from '../components/Card.jsx';
import logements from '../data/logements.json';

function Home() {
    const bannerTitle = "Chez vous, partout et ailleurs";

    return (
        <div>
            {/* Bannière */}
            <Banner backgroundImage={bannerHome} title={bannerTitle} />

            {/* Liste des logements */}
            <div className="cardContainer">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id} 
                        title={logement.title} 
                        cover={logement.cover}  
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;