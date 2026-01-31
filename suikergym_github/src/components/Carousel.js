// src/components/Carousel.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false); // Track if the image is loaded
  const imageRef = useRef(null);

  // Touch event variables
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoaded(false); // Reset loaded state when switching images
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setLoaded(false); // Reset loaded state when switching images
  };

  // Intersection Observer to load image when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true); // Load the image when it enters the viewport
        }
      },
      { threshold: 0.1 } // Load when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [currentIndex]);

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setLoaded(false); // Reset the loaded state on indicator click
  };

  // Touch start event handler
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Touch move event handler
  const handleTouchMove = (e) => {
    e.preventDefault();  // Prevent scrolling
    touchEndX.current = e.touches[0].clientX;
  };
  

  // Touch end event handler
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // Swiped left (next image)
      nextImage();
    } else if (diff < -50) {
      // Swiped right (previous image)
      prevImage();
    }
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="carousel-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="carousel-image-container">
        <img
          ref={imageRef}
          src={loaded ? images[currentIndex] : ""}
          alt={`carousel-${currentIndex}`}
          className="carousel-image"
          loading="lazy"
        />
      </div>
      <button className="carousel-btn next" onClick={nextImage}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
