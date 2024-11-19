// api.js
const API_KEY = process.env.React_APP_OMDB_API;
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search; // Array of movies
  } else {
    throw new Error(data.Error);
  }
};
