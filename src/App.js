import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import SearchResults from "./pages/searchResults/SearchResults";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Home />
    //   <Footer />
    //   <MovieDetails />
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
