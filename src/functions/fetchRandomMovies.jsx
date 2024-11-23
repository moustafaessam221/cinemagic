const apiKey = process.env.REACT_APP_OMDB_API;

// List of predefined query words
const queryWords = [
  "action",
  "war",
  "hero",
  "dream",
  "life",
  "world",
  "star",
  "dark",
  "light",
  "fear",
  "friend",
  "family",
  "legend",
  "truth",
  "power",
];

// Get a random query word
function getRandomQueryWord() {
  const randomIndex = Math.floor(Math.random() * queryWords.length);
  return queryWords[randomIndex];
}

// Fetch movies using a random query word
export async function fetchRandomMoviesByQuery(query) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      return data.Search; // Return array of movies
    } else {
      console.log(`No movies found for query: ${query}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies by query:", error);
    return [];
  }
}

// Fetch multiple random movies
export async function fetchMultipleRandomMovies(count = 5) {
  const movies = [];
  while (movies.length < count) {
    const query = getRandomQueryWord();
    const result = await fetchRandomMoviesByQuery(query);
    movies.push(...result.filter((movie) => movie.Poster !== "N/A")); // Add valid movies only
  }
  return movies.slice(0, count); // Return the exact number of requested movies
}
