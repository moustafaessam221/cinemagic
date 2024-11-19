import MovieCard from "../home/components/MovieCard";
import "./MovieList.css";

const MoviesList = ({ movies }) => {
  if (movies.length === 0) return <p>No results found</p>;

  return (
      <div className="movies_list">
        {movies.map((movie, key) => (
          <MovieCard key={key} movie={movie} />
        ))}
      </div>
  );
};

export default MoviesList;
