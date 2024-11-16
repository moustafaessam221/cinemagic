
import { useParams } from "react-router-dom";
import React from "react";
import Carousel from "./components/Carousel";
import Trending from "./components/Trending";
import "./Home.css";
import NewRelase from "./components/NewRelase";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <Trending />
      <NewRelase />
    </div >
  );
}

export default Home;
