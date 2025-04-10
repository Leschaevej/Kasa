import { useState } from "react";
import "./carousel.scss";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            {images.length > 1 && (
                <button className="arrow left" onClick={prevImage}>&#10094;</button>
            )}
    
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
            />
    
            {images.length > 1 && (
                <button className="arrow right" onClick={nextImage}>&#10095;</button>
            )}
    
            {images.length > 1 && (
                <div className="counter">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );    
};

export default Carousel;
