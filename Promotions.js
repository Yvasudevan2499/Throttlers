// This component was created by Yaswanth Vasudevan (8830598)
import React, { useState, useEffect } from 'react';
import './Promotions.css';

import carImage1 from '../Images/Corolla.jpg';
import carImage2 from '../Images/civic.jpg';
import carImage3 from '../Images/hyundai.jpg';

const Promotions = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        image: carImage1,
        deal: 'Special Offer on Model X - Only $25,000'
      },
      {
        image: carImage2,
        deal: 'Exclusive Discount on Model Y - Save 20%'
      },
      {
        image: carImage3,
        deal: 'Limited Time Deal on Model Z - $5,000 Off'
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
    return (
      <div className="promotions-section">
        <h2 className="promotions-heading">Promotions For You</h2>
        <div className="promotions-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="deal-text">{slide.deal}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Promotions;