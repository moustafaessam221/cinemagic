import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  // Get the movie ID from the URL
  const { id } = useParams();

  return (
    <div className="movie-container">
      {/* Left Column */}
      <div className="movie-info-column">
        <div className="movie-info-item">
          <h3>Release Year</h3>
          <p>2023</p>
        </div>
        <div className="movie-info-item">
          <h3>Language</h3>
          <p>English</p>
        </div>
        <div className="movie-info-item">
          <h3>Rating</h3>
          <div className="stars">
            ★★★★☆
          </div>
        </div>
        <div className="movie-info-item">
          <h3>Genre</h3>
          <p>Action, Drama</p>
        </div>
        <div className="movie-info-item">
          <h3>Director</h3>
          <p>John Doe</p>
        </div>
        <div className="movie-info-item">
          <h3>Writer</h3>
          <p>Jane Smith</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="movie-content-column">
        {/* Description Row */}
        <div className="content-row description">
          <h2>Movie Title</h2>
          <p>This is a short description of the movie. It provides a brief overview of the plot and main themes.</p>
        </div>

        {/* Cast Row */}
        <div className="content-row cast">
          <h2>Cast</h2>
          <div className="cast-grid">
            <div className="cast-member">
              <div className="cast-image-placeholder"></div>
              <p>Actor Name</p>
            </div>
          </div>
        </div>

        {/* Reviews Row */}
        <div className="content-row reviews">
          <h2>Reviews</h2>
          <div className="review-card">
            <div className="review-header">
              <h4>John Smith</h4>
              <div className="review-rating">★★★★☆</div>
            </div>
            <p>Great movie! Highly recommended.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
