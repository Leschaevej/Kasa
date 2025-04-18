import { useState, useEffect } from "react";
import "./carousel.scss";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let touchStartX = 0;

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            nextImage();
        } else if (touchEndX - touchStartX > 50) {
            prevImage();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                prevImage();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, );

    return (
        <div
            className="carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {images.length > 1 && (
                <button className="arrow left" onClick={prevImage}>&#10094;</button>
            )}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
                loading="lazy"
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