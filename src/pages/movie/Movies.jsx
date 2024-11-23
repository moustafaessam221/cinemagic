import React, { useEffect, useState } from "react";
import { fetchMultipleRandomMovies } from "../../functions/fetchRandomMovies";
import MovieCard from "../home/components/MovieCard";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const movies = await fetchMultipleRandomMovies(20);
      setMovies(movies);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="movies_list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
