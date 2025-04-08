import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Collapse from "../../components/collapse/Collapse.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import "./Housing.scss";

function Housing() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    return (
        <section className="housing">
            <Carousel images={logement.pictures} />
            <div className="general">
                <div className="info">
                    <h2>{logement.title}</h2>
                    <p className="location">{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="hostRating">
                    <div className="host">
                        <p className="name">
                            <span className="firstName">{logement.host.name.split(' ').slice(0, -1).join(' ')}</span>
                            <span className="lastName">{logement.host.name.split(' ').slice(-1)}</span>
                        </p>
                        <img className="picture" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className="rating">
                        {[...Array(5)].map((_, index) => {
                            return (
                            <i
                                key={index}
                                className={`fa-solid fa-star ${index < Math.floor(logement.rating) ? 'filled' : ''} ${index + 0.5 <= logement.rating ? 'half-filled' : ''}`}
                            ></i>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="detail">
                <Collapse title="Description" content={logement.description}></Collapse>
                <Collapse title="Equipements" content={
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                }>
                </Collapse>
            </div>
        </section>
    );    
}

export default Housing;
