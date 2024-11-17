import React from "react";
import { LuClock3 } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <div className="movie_card">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="short-details">
          <p>
            <RiMovie2Fill className="card-icon" />
            {movie.Type}
          </p>
          <p>
            <LuClock3 className="card-icon" />
            {movie.Year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

// lazem 7eta mo3ina
// 3awza ay 7ta? 7ader
