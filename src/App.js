import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";

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
      </Routes>
      <Footer />
=    </BrowserRouter>
  );
}

export default App;
