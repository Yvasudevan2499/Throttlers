// This component was created by Yaswanth Vasudevan (8830598)
import React, { useState, useEffect } from 'react';
import image1 from '../Images/Garage1.jpg';
import image2 from '../Images/Garage2.jpeg';
import image3 from '../Images/Garage3.jpeg';

const HeroSlider = () => {
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ height: '660px', position: 'relative' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
