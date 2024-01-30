// This component was created by Yaswanth Vasudevan (8830598)
import React from 'react';
import './CustomerReviews.css'; 

const CustomerReviews = () => {
  const reviewsData = [
    {
      name: 'John Doe',
      gender: 'male',
      rating: 5,
      review: 'Excellent service! I highly recommend Throttlers for their expertise and professionalism.',
    },
    {
      name: 'Jane Smith',
      gender: 'female',
      rating: 4,
      review: 'Great experience. The team at Throttlers is friendly and knowledgeable.',
    },
    {
      name: 'David Johnson',
      gender: 'male',
      rating: 5,
      review: 'Outstanding service. They went above and beyond to fix my car.',
    },
    {
      name: 'Emily Davis',
      gender: 'female',
      rating: 4,
      review: 'I Have been a loyal customer for years. Throttlers never disappoints.',
    },
  ];

  return (
    <section className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="review-cards">
        {reviewsData.map((review, index) => (
          <div key={index} className="review-card">
            <div className={`review-icon ${review.gender}`}>
              {review.gender === 'male' ? '♂' : '♀'}
            </div>
            <div className="review-content">
              <div className="review-header">
                <h3>{review.name}</h3>
                <div className="star-rating">
                  {/* Render star icons based on the rating */}
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star-icon">★</span>
                  ))}
                </div>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
