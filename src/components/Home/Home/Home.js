import React from "react";
import Hero from "../Hero/Hero";
import Quality from "../Quality/Quality";
import Service from "../Service/Service";
import "./Home.css";

function Home() {
  return (
    <div>
      <Hero />
      <Quality />
      <Service />
    </div>
  );
}

export default Home;
