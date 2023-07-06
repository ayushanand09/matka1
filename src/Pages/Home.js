import React from "react";
import "../Css/Home.css";
import Cards from "../Components/Cards";
import BetTokens from "../Components/BetTokens";

const Home = () => {
  return (
    <div className="container">
      <h1>MATKA UI</h1>
      <Cards />
      <BetTokens/>
    </div>
  );
};

export default Home;
