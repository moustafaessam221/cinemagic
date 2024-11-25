import React from "react";
import "../MovieDetails.css";

function MovieInfo({ movie }) {
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info-column">
      <div className="main">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
        <div className="poster-overlay">
          <h2>{movie.Title}</h2>
          <button className="play-trailer-btn">Play Trailer</button>
        </div>
      </div>
      <div className="info">
        <h2>Release Date:</h2>
        <p>{movie.Released}</p>
        <h2>Language:</h2>
        <p>{movie.Language}</p>
        <h2>Genre:</h2>
        <p>{movie.Genre}</p>
        <h2>Director:</h2>
        <p>{movie.Director}</p>
        <h2>Writers: </h2>
        <p>{movie.Writer}</p>
        {/* <h2>Rated:</h2>
        <p>{movie.Rated}</p>
        <h2>Awards: </h2>
        <p>{movie.Awards}</p> */}
      </div>
    </div>
  );
}

export default MovieInfo;
