import "../assets/Card.scss";

const Card = ({ title, cover, location }) => {
  return (
    <div 
      className="card" 
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {location && <p className="card-location">{location}</p>}
      </div>
    </div>
  );
};

export default Card;