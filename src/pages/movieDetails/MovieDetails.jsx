import "./MovieDetails.css";
import React, { useState, useEffect } from 'react';
import MovieDescription from './Components/MovieDescription';
import MovieCast from './Components/MovieCast';
import MovieReviews from './Components/MovieReviews';
import MovieInfo from './Components/MovieInfo';

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=avengers&type=movie&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);


  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
    <div className="left-column">
      <MovieInfo movie={movie} />
      </div>

      <div className="right-column">
        <MovieDescription overview={movie.overview} />
        <MovieCast castData={movie.cast} />
        <MovieReviews reviews={movie.reviews} />
        </div>
    </div>
  );
}

export default MovieDetails;