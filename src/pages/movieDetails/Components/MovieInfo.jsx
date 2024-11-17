import React from 'react';
import "./MovieDetails.css";
import { useParams } from 'react-router-dom';


function MovieInfo({ movie }) {
  return (
    <div className="movie-info-column">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date}</p>
      <p>Language: {movie.original_language}</p>
      {/* ... other movie details */}
    </div>
  );
}

export default MovieInfo;