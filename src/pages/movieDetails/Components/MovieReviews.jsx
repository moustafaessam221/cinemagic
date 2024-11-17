import React from "react";
import "../MovieDetails.css";
import { useParams } from "react-router-dom";

function MovieReviews({ reviews }) {
  if (!reviews) {
    return <div>Loading reviews...</div>; // Or return nothing until reviews is available
  }
  return (
    <div className="content-row reviews">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="review-header">
            <p>{review.Source}</p>
            <div className="review-rating">{review.Value}</div>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieReviews;
