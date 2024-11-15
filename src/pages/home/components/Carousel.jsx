import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Optional, for styling

const Carousel = () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control left" onClick={showPrevImage}>
        &#10094;
      </button>
      <button className="carousel-control right" onClick={showNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
