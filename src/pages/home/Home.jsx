import Banner from '../../components/banner/Banner.jsx';
import bannerHome from '../../assets/bannerHome.webp';
import Card from '../../components/card/Card.jsx';
import logements from '../../data/logements.json';
import './Home.scss';

function Home() {
    const bannerTitle = "Chez vous, partout et ailleurs";

    return (
        <section className='home'>
            <Banner backgroundImage={bannerHome} title={bannerTitle} />
            <div className="cardContainer">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id} 
                        title={logement.title} 
                        cover={logement.cover}  
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;