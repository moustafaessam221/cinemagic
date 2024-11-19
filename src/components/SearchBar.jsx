import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ ref }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`); // Redirect to the search results page
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        ref={ref}
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
