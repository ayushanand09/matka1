// import React from "react";
// import "../Css/NewBetButtons.scss";

// const NewBetButtons = () => {
//   return (
//     <div className="container bet-buttons">
//       <div className="main-buttons">
//         <div>
//           <button className="btn btn-danger">ANK</button>
//           <button className="btn btn-danger">SP</button>
//           <button className="btn btn-danger">DP</button>
//           <button className="btn btn-danger">TP</button>
//           <button className="btn btn-danger">JODI</button>
//         </div>
//         <div>
//           <button className="btn btn-danger">Half Sangam</button>
//           <button className="btn btn-danger">Full Sangam</button>
//           <button className="btn btn-danger">Cycle Patti</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewBetButtons;

import React, { useState } from "react";
import "../Css/NewBetButtons.scss";
import SPbuttons from "./SP/SPbuttons";

const NewBetButtons = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleBackButtonClick = () => {
    setSelectedButton("");
  };

  const renderContent = () => {
    switch (selectedButton) {
      case "ANK":
        return (
          <div className="buttons">
            <div className="ANK-1">
              <button className="btn btn-danger">ANK</button>
              <button className="btn btn-warning" value={1}>1</button>
              <button className="btn btn-warning"value={2}>2</button>
              <button className="btn btn-warning" value={3}>3</button>
              <button className="btn btn-warning" value={4}>4</button>
              <button className="btn btn-warning" value={5}>5</button>
            </div>
            <div className="ANK-2">
              <button className="btn btn-primary" onClick={handleBackButtonClick}>
                BACK
              </button>
              <button className="btn btn-warning" value={6}>6</button>
              <button className="btn btn-warning" value={7}>7</button>
              <button className="btn btn-warning" value={8}>8</button>
              <button className="btn btn-warning" value={9}>9</button>
              <button className="btn btn-warning" value={0}>0</button>
            </div>
          </div>
        );
      case "SP":
        return (
          <SPbuttons/>
        );
      case "DP":
        return (
          <div>
            <h2>Content for DP</h2>
            {/* Add specific content for DP button */}
          </div>
        );
      case "TP":
        return (
          <div>
            <h2>Content for TP</h2>
            {/* Add specific content for TP button */}
          </div>
        );
      case "JODI":
        return (
          <div>
            <h2>Content for JODI</h2>
            {/* Add specific content for JODI button */}
          </div>
        );
      case "Half Sangam":
        return (
          <div>
            <h2>Content for Half Sangam</h2>
            {/* Add specific content for Half Sangam button */}
          </div>
        );
      case "Full Sangam":
        return (
          <div>
            <h2>Content for Full Sangam</h2>
            {/* Add specific content for Full Sangam button */}
          </div>
        );
      case "Cycle Patti":
        return (
          <div>
            <h2>Content for Cycle Patti</h2>
            {/* Add specific content for Cycle Patti button */}
          </div>
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
              onClick={() => handleButtonClick("Half Sangam")}
            >
              Half Sangam
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("Full Sangam")}
            >
              Full Sangam
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleButtonClick("Cycle Patti")}
            >
              Cycle Patti
            </button>
          </div>
        </div>
      ) : (
        <div className="content">
          {renderContent()}
            {selectedButton === "ANK" ? "" :
          <button className="btn btn-primary" onClick={handleBackButtonClick}>
            Back
          </button>
          }
        </div>
      )}
    </div>
  );
};

export default NewBetButtons;