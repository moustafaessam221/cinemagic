import React from "react";
import Carousel from "./components/Carousel";
import Trending from "./components/Trending";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <Trending />
    </div >
  );
}

export default Home;
