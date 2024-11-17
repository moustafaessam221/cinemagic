import React from 'react';
import "./MovieDetails.css";
import { useParams } from 'react-router-dom';



function MovieCast({ cast }) {
  return (
    <div className="content-row cast">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.map(actor => (
          <div className="cast-member" key={actor.id}>
            <div className="cast-image-placeholder"></div>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCast;