import React from "react";
import "../Css/Home.css";
import Cards from "./Cards";

// import Cards from "./Cards";
// import Tokens from "./Tokens";
// import Buttons from "./Buttons";

const Home = () => {
    return (
        <div className="container">
            <h1>MATKA UI</h1>
            <Cards/>
        </div>
    );
};

export default Home;