import React from "react";
import "../MovieDetails.css";
import { useParams } from "react-router-dom";

function MovieInfo({ movie }) {
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info-column">
      <h2>{movie.title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Release Date: {movie.Released}</p>
      <p>Language: {movie.Language}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Writers: {movie.Writer}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Awards: {movie.Awards}</p>
      {/* ... other movie details */}
    </div>
  );
}

export default MovieInfo;
