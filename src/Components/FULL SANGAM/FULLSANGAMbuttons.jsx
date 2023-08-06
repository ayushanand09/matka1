import React, { useState } from "react";
import "../SP/SP.scss"

const FULLSANGAMbuttons = ({objects,parentVariable,onChildVariableChange}) => {
  const [selectFull, setselectFull] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [betArr, setBetArr] = useState([]);

  const handleSelectClick = (buttonId) => {
    if (selectFull === buttonId) {
      setselectFull(null);
      setIsAnimated(false);
    } else {
      setselectFull(buttonId);
      setIsAnimated(true);
    }
  };

  const fullButtonClick = (e) => {
    setBetArr([...betArr, Number(e.target.value)]);
  }

  React.useEffect(() => {
    if (betArr.length !== 0) {
      objects.selectedNumbers = betArr;
      localStorage.setItem("payLoad", JSON.stringify(objects));
      onChildVariableChange(!parentVariable);
    }
  }, [betArr]);

  const renderContent = () => {
    if (selectFull !== null) {
      switch (selectFull) {
        case 1:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 2:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 3:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 4:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 5:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 6:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 7:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 8:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
                </div>
            </div>
          );
        case 9:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button value={570} onClick={fullButtonClick}> 570 </button>
                  <button value={237} onClick={fullButtonClick}> 237 </button>
                  <button value={480} onClick={fullButtonClick}> 480 </button>
                  <button value={156} onClick={fullButtonClick}> 156 </button>
                  <button value={390} onClick={fullButtonClick}> 390 </button>
                  <button value={147} onClick={fullButtonClick}> 147 </button>
                </div>
                <div className="options-set2">
                  <button value={679} onClick={fullButtonClick}> 679 </button>
                  <button value={345} onClick={fullButtonClick}> 345 </button>
                  <button value={138} onClick={fullButtonClick}> 138 </button>
                  <button value={589} onClick={fullButtonClick}> 589 </button>
                  <button value={246} onClick={fullButtonClick}> 246 </button>
                  <button value={129} onClick={fullButtonClick}> 129 </button>
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
      <button className="btn btn-danger">Full Sangam</button>
      <div className="sp-button-content">
        <button value={1} onClick={() => handleSelectClick(1)}>
          <span className="sp-txt"> SELECT ALL 1 </span>
          <span
            className={`angle ${
              selectFull === 1 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 1 ? renderContent() : ""}

        <button value={2} onClick={() => handleSelectClick(2)}>
          <span className="sp-txt"> SELECT ALL 2 </span>
          
          <span
            className={`angle ${
              selectFull === 2 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 2 ? renderContent() : ""}
        <button value={3} onClick={() => handleSelectClick(3)}>
          <span className="sp-txt"> SELECT ALL 3 </span>
          
          <span
            className={`angle ${
              selectFull === 3 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 3 ? renderContent() : ""}
        <button value={4} onClick={() => handleSelectClick(4)}>
          <span className="sp-txt"> SELECT ALL 4 </span>
          
          <span
            className={`angle ${
              selectFull === 4 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 4 ? renderContent() : ""}
        <button value={5} onClick={() => handleSelectClick(5)}>
          <span className="sp-txt"> SELECT ALL 5 </span>
          
          <span
            className={`angle ${
              selectFull === 5 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 5 ? renderContent() : ""}
        <button value={6} onClick={() => handleSelectClick(6)}>
          <span className="sp-txt"> SELECT ALL 6 </span>
          
          <span
            className={`angle ${
              selectFull === 6 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 6 ? renderContent() : ""}
        <button value={7} onClick={() => handleSelectClick(7)}>
          <span className="sp-txt"> SELECT ALL 7 </span>
          
          <span
            className={`angle ${
              selectFull === 7 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 7 ? renderContent() : ""}
        <button value={8} onClick={() => handleSelectClick(8)}>
          <span className="sp-txt"> SELECT ALL 8 </span>
          
          <span
            className={`angle ${
              selectFull === 8 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 8 ? renderContent() : ""}
        <button value={9} onClick={() => handleSelectClick(9)}>
          <span className="sp-txt"> SELECT ALL 9 </span>
          
          <span
            className={`angle ${
              selectFull === 9 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectFull === 9 ? renderContent() : ""}
        {/* {renderContent()} */}
      </div>
    </>
  );
};

export default FULLSANGAMbuttons;