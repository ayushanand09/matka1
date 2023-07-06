import React from "react";
import "../Css/Cards.css"
import playing_card from "../Data/data"

const Cards = () => {
    return(
        <>
        <div className="cards">
          {playing_card.slice(0, 5).map((card) => (
            <div key = {card.code}>
              <div id={card.value}> <img src = {card.image} alt="" /> </div>
              <div >{card.suit}</div>
            </div>
          ))}
        </div>

        {/* <div className="cards">
          <div id="card-1">
            <img
              src={require("./Cards/card_spades_10.png")}
              alt="Not displaying image1"
            />
            <img
              src={require("./Cards/card_hearts_09.png")}
              alt="Not displaying image2"
            />
            <img
              src={require("./Cards/card_spades_A.png")}
              alt="Not displaying image3"
            />
            190-0
          </div>
          <div id="card-2">
            <img
              src={require("./Cards/card_spades_06.png")}
              alt="Not displaying image4"
            />
            <img
              src={require("./Cards/card_hearts_03.png")}
              alt="Not displaying image5"
            />
            <img
              src={require("./Cards/card_hearts_06.png")}
              alt="Not displaying image6"
            />
            366-5
          </div>
          <div id="card-3">
            <img
              src={require("./Cards/card_hearts_09.png")}
              alt="Not displaying image7"
            />
            <img
              src={require("./Cards/card_clubs_04.png")}
              alt="Not displaying image8"
            />
            <img
              src={require("./Cards/card_hearts_A.png")}
              alt="Not displaying image9"
            />
            149-4
          </div>
          <div id="card-4">
            <img
              src={require("./Cards/card_spades_06.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_clubs_03.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_diamonds_10.png")}
              alt="Not displaying image"
            />
            360-9
          </div>
          <div id="card-5">
            <img
              src={require("./Cards/card_hearts_02.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_spades_05.png")}
              alt="Not displaying image"
            />
            <img
              src={require("./Cards/card_hearts_02.png")}
              alt="Not displaying image"
            />
            235-0
          </div>
        </div> */}
        </>
        
    );
};

export default Cards;