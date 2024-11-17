import "./MovieDetails.css";
import React, { useState, useEffect } from "react";
import MovieDescription from "./Components/MovieDescription";
import MovieCast from "./Components/MovieCast";
import MovieReviews from "./Components/MovieReviews";
import MovieInfo from "./Components/MovieInfo";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const apiKey = process.env.REACT_APP_OMDB_API;

  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  const url = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${apiKey}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, [url]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div className="left-column">
        <MovieInfo movie={movie} />
      </div>

      <div className="right-column">
        <MovieDescription overview={movie.Plot} />
        <MovieCast castData={movie.Actors} />
        <MovieReviews reviews={movie.Ratings} />
      </div>
    </div>
  );
}

export default MovieDetails;
