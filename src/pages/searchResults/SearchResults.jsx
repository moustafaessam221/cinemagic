import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../functions/api";
import MoviesList from "./MovieList";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchMovies(query)
        .then((results) => {
          setMovies(results);
          setError("");
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white", marginBottom: "20px" }}>
        Search Results for "{query}"
      </h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default SearchResults;
