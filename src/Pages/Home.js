import React from "react";
import "../Css/Home.css";
import Cards from "../Components/Cards";
import BetTokens from "../Components/BetTokens";
import BetButtons from "../Components/BetButtons";
import NewBetButtons from "../Components/NewBetButtons";

const Home = () => {
  return (
    <div className="container1">
      <h1>MATKA UI</h1>
      <Cards />
      <BetTokens />
      <BetButtons/>
      {/* <NewBetButtons/> */}
    </div>
  );
};

export default Home;
