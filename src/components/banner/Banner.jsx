import "./Banner.scss";

const Banner = ({ backgroundImage, title }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {title && <h2>{title}</h2>}
    </div>
  );
};

export default Banner;