import React from "react";
import { LuClock3 } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import { motion } from "framer-motion";

function MovieCard({ movie }) {
  return (
    // add animation with framer motion

    <Link to={`/movies/${movie.imdbID}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        // transition = {{ duration: 0.3 }}
        className="movie_card"
      >
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
      </motion.div>
    </Link>
  );
}

export default MovieCard;
