import { useNavigate } from "react-router-dom";
import './Card.scss';

const Card = ({ id, title, cover, location }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="card" 
      style={{ backgroundImage: `url(${cover})` }}
      onClick={() => navigate(`/housing/${id}`)}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {location && <p className="card-location">{location}</p>}
      </div>
    </div>
  );
};

export default Card;