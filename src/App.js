import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <MovieDetails />

    </div>
  );
}

export default App;
