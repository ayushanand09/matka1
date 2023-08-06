import React, { useEffect, useState } from "react";
import "../Css/NewBetButtons.scss";
import SPbuttons from "./SP/SPbuttons";
import DPbuttons from "./DP/DPbuttons";
import TPbuttons from "./TP/TPbuttons";
import JODIbuttons from "./JODI/JODIbuttons";
import HALFSANGAMbuttons from "./HALF SANGAM/HALFSANGAMbuttons";
import FULLSANGAMbuttons from "./FULL SANGAM/FULLSANGAMbuttons";
import CYCLEPATTIbuttons from "./CYCLE PATTI/CYCLEPATTI";



const NewBetButtons = ({objects,parentVariable,onChildVariableChange}) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [betArr, setBetArr] = useState([]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleBackButtonClick = () => {
    setSelectedButton("");
  };

  const ankButtonValue = (e) => {
    // console.log(e.target.value);
    setBetArr([...betArr, Number(e.target.value)]);
  }

  useEffect(() => {
    if (selectedButton !== "") {
      // props.objects.betType = selectedButton;
      objects.betType = selectedButton;
    }
  }, [selectedButton]);


  useEffect(() => {
    if (betArr.length !== 0) {
      objects.selectedNumbers = betArr;
      // localStorage.setItem("payLoad", JSON.stringify(props.objects));
      localStorage.setItem("payLoad", JSON.stringify(objects));
      onChildVariableChange(!parentVariable);
    }
  }, [betArr]);


  const renderContent = () => {
    switch (selectedButton) {
      case "ANK":
        return (
          <div className="buttons">
            <div className="ANK-1">
              <button className="btn btn-danger">ANK</button>
              <button className="btn btn-warning" value={1} onClick={ankButtonValue}>1</button>
              <button className="btn btn-warning" value={2} onClick={ankButtonValue}>2</button>
              <button className="btn btn-warning" value={3} onClick={ankButtonValue}>3</button>
              <button className="btn btn-warning" value={4} onClick={ankButtonValue}>4</button>
              <button className="btn btn-warning" value={5} onClick={ankButtonValue}>5</button>
            </div>
            <div className="ANK-2">
              <button className="btn btn-primary" onClick={handleBackButtonClick}>
                BACK
              </button>
              <button className="btn btn-warning" value={6} onClick={ankButtonValue}>6</button>
              <button className="btn btn-warning" value={7} onClick={ankButtonValue}>7</button>
              <button className="btn btn-warning" value={8} onClick={ankButtonValue}>8</button>
              <button className="btn btn-warning" value={9} onClick={ankButtonValue}>9</button>
              <button className="btn btn-warning" value={0} onClick={ankButtonValue}>0</button>
            </div>
          </div>
        );
      case "SP":
        return (
          <SPbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange} />
        );
      case "DP":
        return (
          <DPbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      case "TP":
        return (
            <TPbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      case "JODI":
        return (
          <JODIbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      case "HALF SANGAM":
        return (
          <HALFSANGAMbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      case "FULL SANGAM":
        return (
          <FULLSANGAMbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      case "CYCLE PATTI":
        return (
          <CYCLEPATTIbuttons objects={objects} parentVariable={ parentVariable} onChildVariableChange={onChildVariableChange}/>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container bet-buttons">
      {!selectedButton ? (
        <div className="main-buttons">
          <div>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("ANK")}
            >
              ANK
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("SP")}
            >
              SP
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("DP")}
            >
              DP
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("TP")}
            >
              TP
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("JODI")}
            >
              JODI
            </button>
          </div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("HALF SANGAM")}
            >
              Half Sangam
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("FULL SANGAM")}
            >
              Full Sangam
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("CYCLE PATTI")}
            >
              Cycle Patti
            </button>
          </div>
        </div>
      ) : (
        <div className="content">
            {selectedButton === "ANK" ? "" :
          <button className="btn btn-primary" onClick={handleBackButtonClick}>
            Back
          </button>
          }
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default NewBetButtons;