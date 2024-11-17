import React from 'react';
import "../MovieDetails.css";
import { useParams } from 'react-router-dom';


function MovieDescription({ overview }) {
  return (
    <div className="content-row description">
      <h2>Description</h2>
      <p>{overview}</p>
    </div>
  );
}

export default MovieDescription;