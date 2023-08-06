import React, { useState } from "react";
import "../SP/SP.scss";

const JODIbuttons = ({ objects, parentVariable, onChildVariableChange }) => {
  const [selectJODi, setselectJODi] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [betArr, setBetArr] = useState([]);

  const handleSelectClick = (buttonId) => {
    if (selectJODi === buttonId) {
      setselectJODi(null);
      setIsAnimated(false);
    } else {
      setselectJODi(buttonId);
      setIsAnimated(true);
    }
  };
  const jodiButtonClick = (e) => {
    setBetArr([...betArr, Number(e.target.value)]);
  };

  React.useEffect(() => {
    if (betArr.length !== 0) {
      objects.selectedNumbers = betArr;
      localStorage.setItem("payLoad", JSON.stringify(objects));
      onChildVariableChange(!parentVariable);
    }
  }, [betArr]);

  const renderContent = () => {
    if (selectJODi !== null) {
      switch (selectJODi) {
        case 1:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={137} onClick={jodiButtonClick}>
                  137
                </button>
                <button value={146} onClick={jodiButtonClick}>
                  146
                </button>
                <button value={236} onClick={jodiButtonClick}>
                  236
                </button>
                <button value={245} onClick={jodiButtonClick}>
                  245
                </button>
                <button value={290} onClick={jodiButtonClick}>
                  290
                </button>
                <button value={380} onClick={jodiButtonClick}>
                  380
                </button>
              </div>
              <div className="options-set2">
                <button value={470} onClick={jodiButtonClick}>
                  470
                </button>
                <button value={486} onClick={jodiButtonClick}>
                  489
                </button>
                <button value={560} onClick={jodiButtonClick}>
                  560
                </button>
                <button value={579} onClick={jodiButtonClick}>
                  579
                </button>
                <button value={678} onClick={jodiButtonClick}>
                  678
                </button>
                <button value={128} onClick={jodiButtonClick}>
                  128
                </button>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 5:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 6:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 7:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 8:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        case 9:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={jodiButtonClick}>
                  570
                </button>
                <button value={237} onClick={jodiButtonClick}>
                  237
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  480
                </button>
                <button value={480} onClick={jodiButtonClick}>
                  156
                </button>
                <button value={390} onClick={jodiButtonClick}>
                  390
                </button>
                <button value={147} onClick={jodiButtonClick}>
                  147
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={jodiButtonClick}>
                  679
                </button>
                <button value={345} onClick={jodiButtonClick}>
                  345
                </button>
                <button value={138} onClick={jodiButtonClick}>
                  138
                </button>
                <button value={589} onClick={jodiButtonClick}>
                  589
                </button>
                <button value={246} onClick={jodiButtonClick}>
                  246
                </button>
                <button value={129} onClick={jodiButtonClick}>
                  129
                </button>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <>
      <button className="btn btn-danger">JODI</button>
      <div className="sp-button-content">
        <button value={1} onClick={() => handleSelectClick(1)}>
          <span className="sp-txt"> SELECT ALL 1 </span>
          <span
            className={`angle ${
              selectJODi === 1 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 1 ? renderContent() : ""}

        <button value={2} onClick={() => handleSelectClick(2)}>
          <span className="sp-txt"> SELECT ALL 2 </span>
          <span
            className={`angle ${
              selectJODi === 2 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 2 ? renderContent() : ""}
        <button value={3} onClick={() => handleSelectClick(3)}>
          <span className="sp-txt"> SELECT ALL 3 </span>
          <span
            className={`angle ${
              selectJODi === 3 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 3 ? renderContent() : ""}
        <button value={4} onClick={() => handleSelectClick(4)}>
          <span className="sp-txt"> SELECT ALL 4 </span>
          <span
            className={`angle ${
              selectJODi === 4 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 4 ? renderContent() : ""}
        <button value={5} onClick={() => handleSelectClick(5)}>
          <span className="sp-txt"> SELECT ALL 5 </span>
          <span
            className={`angle ${
              selectJODi === 5 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 5 ? renderContent() : ""}
        <button value={6} onClick={() => handleSelectClick(6)}>
          <span className="sp-txt"> SELECT ALL 6 </span>
          <span
            className={`angle ${
              selectJODi === 6 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 6 ? renderContent() : ""}
        <button value={7} onClick={() => handleSelectClick(7)}>
          <span className="sp-txt"> SELECT ALL 7 </span>
          <span
            className={`angle ${
              selectJODi === 7 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 7 ? renderContent() : ""}
        <button value={8} onClick={() => handleSelectClick(8)}>
          <span className="sp-txt"> SELECT ALL 8 </span>
          <span
            className={`angle ${
              selectJODi === 8 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 8 ? renderContent() : ""}
        <button value={9} onClick={() => handleSelectClick(9)}>
          <span className="sp-txt"> SELECT ALL 9 </span>
          <span
            className={`angle ${
              selectJODi === 9 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^
          </span>
        </button>
        {selectJODi === 9 ? renderContent() : ""}
        {/* {renderContent()} */}
      </div>
    </>
  );
};

export default JODIbuttons;
