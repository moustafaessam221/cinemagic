import React from 'react';
import "./MovieDetails.css";
import { useParams } from 'react-router-dom';



function MovieReviews({ reviews }) {
  return (
    <div className="content-row reviews">
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div className="review-card" key={review.id}>
          <div className="review-header">
            <h4>{review.author}</h4>
            <div className="review-rating">★★★★☆</div>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieReviews;