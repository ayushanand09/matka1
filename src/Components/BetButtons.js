import React,{useState, useEffect } from "react";
import "../Css/BetButtons.css"

const BetButtons = () => {
    const [displayBet, setdisplayBet] = useState(false);
    const [currentText, setCurrentText] = useState("");

    // const [animation, setAnimation] = useState(false);
    const animation = useState(false);
    
    const [timer, setTimer] = useState(0);

    useEffect(() => {
      const showTimeout = setTimeout(() => {
        setdisplayBet(true);
      }, 15000);
  
      const hideTimeout = setTimeout(() => {
        setdisplayBet(false);
      }, 55000);
  
      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
      };
    }, []);

    useEffect(() => {
        const texts = [
          { id: "txt",text: "Cards Shuffling", duration: 15000 }, //Shuffling time: approx 27s
          {  id: "txt",text: "Place your bets", duration: 40000 }, //Betting time: approx1min:20s
          {  id: "txt",text: "Wait for the result", duration: 15000 }, //Result Declaration time: approx 30s
        ];
        const interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1000);
        }, 1000);
    
        texts.forEach((text, index) => {
          const textStartTime = texts
            .slice(0, index)
            .reduce((acc, t) => acc + t.duration, 0);
          const textEndTime = textStartTime + text.duration;
    
          if (timer >= textStartTime && timer < textEndTime) {
            setCurrentText(text.text);
          }
        });
        const totalDuration = texts.reduce((acc, text) => acc + text.duration, 0);
    
        if (timer >= totalDuration) {
          clearInterval(interval);
          window.location.reload();
        }
    
        return () => {
          clearInterval(interval);
        };
      }, [timer]);
  return (
    <>
      {/* <div className="time-bar-outer-container"> */}
      <div className="timer-bar-container">
        <div className={`timer-bar ${animation ? "animate" : ""}`}></div>
      </div>
      <div className="display-bet-two-buttons">
        <div>
          <span className="txt">{currentText}</span>{" "}
        </div>
        {displayBet && (
          <>
            <div className="bet-add-drop">
              <button className="remove-rebet">Remove</button>
              <button className="remove-rebet">Rebet x2</button>
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default BetButtons;