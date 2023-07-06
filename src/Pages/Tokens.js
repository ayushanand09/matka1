import React, { useState,useEffect } from "react";
import "../Css/Tokens.css"

const Tokens = () => {
  const [displayToken, setdisplayToken] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setdisplayToken(true);
    }, 15000);

    const hideTimeout = setTimeout(() => {
      setdisplayToken(false);
    }, 55000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  // useEffect(() => {
  //   const texts = [
  //     { id: "txt", text: "Cards Shuffling", duration: 15000 }, //Shuffling time: approx 27s
  //     { id: "txt", text: "Place your bets", duration: 40000 }, //Betting time: approx1min:20s
  //     { id: "txt", text: "Wait for the result", duration: 15000 }, //Result Declaration time: approx 30s
  //   ];
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer + 1000);
  //   }, 1000);

  //   texts.forEach((text, index) => {
  //     const textStartTime = texts
  //       .slice(0, index)
  //       .reduce((acc, t) => acc + t.duration, 0);
  //     const textEndTime = textStartTime + text.duration;

  //     if (timer >= textStartTime && timer < textEndTime) {
  //       setCurrentText(text.text);
  //     }
  //   });
  //   const totalDuration = texts.reduce((acc, text) => acc + text.duration, 0);

  //   if (timer >= totalDuration) {
  //     clearInterval(interval);
  //     window.location.reload();
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [timer]);

  return (
    <>
      {displayToken && (
        <div className="tokens-outer">
          <div className="tokens">
            <button className="token1" value={1}></button>
            <button className="token2" value={5}></button>
            <button className="token3" value={10}></button>
            <button className="token4" value={20}></button>
            <button className="token5" value={50}></button>
            <button className="token6" value={100}></button>
            <button className="token7" value={250}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tokens;
