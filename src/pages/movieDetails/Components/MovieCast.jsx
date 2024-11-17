import React from "react";
import "../MovieDetails.css";

function MovieCast({ castData }) {
  if (!castData) {
    return <div>Loading cast data...</div>; // Or return nothing until castData is available
  }

  let namesArr = castData.split(", ");
  return (
    <div className="content-row cast">
      <h2>Cast</h2>
      <div className="cast-grid">
        {namesArr.map((actor, index) => (
          <div className="cast-member" key={index} >
            <div className="cast-image-placeholder"></div>
            <p>{actor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCast;
