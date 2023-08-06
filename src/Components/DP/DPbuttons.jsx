import React, { useState } from "react";
import "../SP/SP.scss"

const DPbuttons = ({ objects, parentVariable, onChildVariableChange }) => {
  const [selectDP, setselectDP] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [betArr, setBetArr] = useState([]);

  const handleSelectClick = (buttonId) => {
    if (selectDP === buttonId) {
      setselectDP(null);
      setIsAnimated(false);
    } else {
      setselectDP(buttonId);
      setIsAnimated(true);
    }
  };

  const dpButtonClick = (e) => {
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
    if (selectDP !== null) {
      switch (selectDP) {
        case 1:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 3:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 5:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 6:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 7:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 8:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
                </button>
              </div>
            </div>
          );
        case 9:
          return (
            <div className="buttons1">
              <div className="options-set1">
                <button value={570} onClick={dpButtonClick}>
                  {" "}
                  570{" "}
                </button>
                <button value={237} onClick={dpButtonClick}>
                  {" "}
                  237{" "}
                </button>
                <button value={480} onClick={dpButtonClick}>
                  {" "}
                  480{" "}
                </button>
                <button value={156} onClick={dpButtonClick}>
                  {" "}
                  156{" "}
                </button>
                <button value={390} onClick={dpButtonClick}>
                  {" "}
                  390{" "}
                </button>
                <button value={147} onClick={dpButtonClick}>
                  {" "}
                  147{" "}
                </button>
              </div>
              <div className="options-set2">
                <button value={679} onClick={dpButtonClick}>
                  {" "}
                  679{" "}
                </button>
                <button value={345} onClick={dpButtonClick}>
                  {" "}
                  345{" "}
                </button>
                <button value={138} onClick={dpButtonClick}>
                  {" "}
                  138{" "}
                </button>
                <button value={589} onClick={dpButtonClick}>
                  {" "}
                  589{" "}
                </button>
                <button value={246} onClick={dpButtonClick}>
                  {" "}
                  246{" "}
                </button>
                <button value={129} onClick={dpButtonClick}>
                  {" "}
                  129{" "}
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
      <button className="btn btn-danger">DP</button>
      <div className="sp-button-content">
        <button value={1} onClick={() => handleSelectClick(1)}>
          <span className="sp-txt"> SELECT ALL 1 </span>
          <span
            className={`angle ${
              selectDP === 1 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 1 ? renderContent() : ""}

        <button value={2} onClick={() => handleSelectClick(2)}>
          <span className="sp-txt"> SELECT ALL 2 </span>
          <span
            className={`angle ${
              selectDP === 2 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 2 ? renderContent() : ""}
        <button value={3} onClick={() => handleSelectClick(3)}>
          <span className="sp-txt"> SELECT ALL 3 </span>
          <span
            className={`angle ${
              selectDP === 3 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 3 ? renderContent() : ""}
        <button value={4} onClick={() => handleSelectClick(4)}>
          <span className="sp-txt"> SELECT ALL 4 </span>
          <span
            className={`angle ${
              selectDP === 4 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 4 ? renderContent() : ""}
        <button value={5} onClick={() => handleSelectClick(5)}>
          <span className="sp-txt"> SELECT ALL 5 </span>
          <span
            className={`angle ${
              selectDP === 5 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 5 ? renderContent() : ""}
        <button value={6} onClick={() => handleSelectClick(6)}>
          <span className="sp-txt"> SELECT ALL 6 </span>
          <span
            className={`angle ${
              selectDP === 6 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 6 ? renderContent() : ""}
        <button value={7} onClick={() => handleSelectClick(7)}>
          <span className="sp-txt"> SELECT ALL 7 </span>
          <span
            className={`angle ${
              selectDP === 7 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 7 ? renderContent() : ""}
        <button value={8} onClick={() => handleSelectClick(8)}>
          <span className="sp-txt"> SELECT ALL 8 </span>
          <span
            className={`angle ${
              selectDP === 8 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 8 ? renderContent() : ""}
        <button value={9} onClick={() => handleSelectClick(9)}>
          <span className="sp-txt"> SELECT ALL 9 </span>
          <span
            className={`angle ${
              selectDP === 9 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectDP === 9 ? renderContent() : ""}
        {/* {renderContent()} */}
      </div>
    </>
  );
};

export default DPbuttons;