import React, { useState } from "react";
import "../SP/SP.scss"

const HALFSANGAMbuttons = () => {
  const [selectSP, setSelectSP] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleSelectClick = (buttonId) => {
    if (selectSP === buttonId) {
      setSelectSP(null);
      setIsAnimated(false);
    } else {
      setSelectSP(buttonId);
      setIsAnimated(true);
    }
  };

  const renderContent = () => {
    if (selectSP !== null) {
      switch (selectSP) {
        case 1:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
            </div>
          );
        case 2:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 3:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 4:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 5:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 6:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 7:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 8:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
            </div>
          );
        case 9:
          return (
            <div className="buttons1">
              <div className="options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
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
      <button className="btn btn-danger">Half Sangam</button>
      <div className="sp-button-content">
        <button value={1} onClick={() => handleSelectClick(1)}>
          <span className="sp-txt"> SELECT ALL 1 </span>
          <span
            className={`angle ${
              selectSP === 1 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 1 ? renderContent() : ""}

        <button value={2} onClick={() => handleSelectClick(2)}>
          <span className="sp-txt"> SELECT ALL 2 </span>
          
          <span
            className={`angle ${
              selectSP === 2 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 2 ? renderContent() : ""}
        <button value={3} onClick={() => handleSelectClick(3)}>
          <span className="sp-txt"> SELECT ALL 3 </span>
          
          <span
            className={`angle ${
              selectSP === 3 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 3 ? renderContent() : ""}
        <button value={4} onClick={() => handleSelectClick(4)}>
          <span className="sp-txt"> SELECT ALL 4 </span>
          
          <span
            className={`angle ${
              selectSP === 4 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 4 ? renderContent() : ""}
        <button value={5} onClick={() => handleSelectClick(5)}>
          <span className="sp-txt"> SELECT ALL 5 </span>
          
          <span
            className={`angle ${
              selectSP === 5 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 5 ? renderContent() : ""}
        <button value={6} onClick={() => handleSelectClick(6)}>
          <span className="sp-txt"> SELECT ALL 6 </span>
          
          <span
            className={`angle ${
              selectSP === 6 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 6 ? renderContent() : ""}
        <button value={7} onClick={() => handleSelectClick(7)}>
          <span className="sp-txt"> SELECT ALL 7 </span>
          
          <span
            className={`angle ${
              selectSP === 7 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 7 ? renderContent() : ""}
        <button value={8} onClick={() => handleSelectClick(8)}>
          <span className="sp-txt"> SELECT ALL 8 </span>
          
          <span
            className={`angle ${
              selectSP === 8 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 8 ? renderContent() : ""}
        <button value={9} onClick={() => handleSelectClick(9)}>
          <span className="sp-txt"> SELECT ALL 9 </span>
          
          <span
            className={`angle ${
              selectSP === 9 && isAnimated
                ? "downtick-animation"
                : "uptick-animation"
            }`}
          >
            {" "}
            ^{" "}
          </span>{" "}
        </button>
        {selectSP === 9 ? renderContent() : ""}
        {/* {renderContent()} */}
      </div>
    </>
  );
};

export default HALFSANGAMbuttons;