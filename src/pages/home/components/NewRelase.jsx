import React, { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import "./NewRelase.css";
import { FaArrowRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { RiMovie2Fill } from "react-icons/ri";
function NewRelase() {
  const apiKey = process.env.REACT_APP_OMDB_API;
  console.log(apiKey);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=avengers&type=movie&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

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
        {movies.map(
          (movie, key) => (
              <div className="movie_card" key={key}>
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
            )
        )}
      </div>
    </div>
  );
}

export default NewRelase;