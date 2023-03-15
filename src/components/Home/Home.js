import React from "react";
import Hero from "./Hero";
import Quality from "./Quality";
import Service from "./Service";
import Footer from "../../commons/Footer";
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