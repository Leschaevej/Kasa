import "../assets/Banner.scss";

const Banner = ({ backgroundImage }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;