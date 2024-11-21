import React, { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import "./Trending.css";
import { FaArrowRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
import MovieCard from "./MovieCard";
function NewRelase() {
  const apiKey = process.env.REACT_APP_OMDB_API;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=avengers&type=movie&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="trending">
      <div className="trending-header">
        <div className="fire">
          <h2>
            <BsFire className="fire" />
            NewRelase
          </h2>
        </div>
        <div className="blank_line"></div>
        <div className="view">
          <p>View all</p>
          <FaArrowRight className="arrow" />
        </div>
      </div>
      <div className="trending-movies">
        {/* movie function */}
        {movies.map((movie, key) => (
          <MovieCard key={key} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default NewRelase;
