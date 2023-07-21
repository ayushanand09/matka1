import React from "react";
import "../Css/Cards.scss";
import playing_card from "../Data/data";

const Cards = () => {
  var firstCard = "3h";
  var secondCard = "5s";
  var thirdCard = "0c";
  const firstFilter = playing_card.filter((item) => item.code === firstCard);
  const secondFilter = playing_card.filter((item) => item.code === secondCard);
  const thirdFilter = playing_card.filter((item) => item.code === thirdCard);
  const total_value =
    (firstFilter[0].value + secondFilter[0].value + thirdFilter[0].value) % 10;
  return (
    <>
      <div className="cards">
        <div className="cards_hero_div">
          <div className="main_cards">
            {firstFilter.map((item) => (
              <img src={item.image} alt="card" key={item.code} />
            ))}
            {secondFilter.map((item) => (
              <img src={item.image} alt="card" key={item.code} />
            ))}
            {thirdFilter.map((item) => (
              <img src={item.image} alt="card" key={item.code} />
            ))}
          </div>
          <div className="cards_value">
            {firstFilter.map((item) => (
              <span key={item.code}>{item.value}</span>
            ))}
            {secondFilter.map((item) => (
              <span key={item.code}>{item.value}</span>
            ))}
            {thirdFilter.map((item) => (
              <span key={item.code}>{item.value}</span>
            ))}
          </div>
          <div className="cards_final_value"> - {total_value}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
