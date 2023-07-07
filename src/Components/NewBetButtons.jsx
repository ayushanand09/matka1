import React from "react";
import "../Css/NewBetButtons.scss";

const NewBetButtons = () => {
  return (
    <div className="container bet-buttons">
      <div className="main-buttons">
        <div>
          <button className="btn btn-danger">ANK</button>
          <button className="btn btn-danger">SP</button>
          <button className="btn btn-danger">DP</button>
          <button className="btn btn-danger">TP</button>
          <button className="btn btn-danger">JODI</button>
        </div>
        <div>
          <button className="btn btn-danger">Half Sangam</button>
          <button className="btn btn-danger">Full Sangam</button>
          <button className="btn btn-danger">Cycle Patti</button>
        </div>
      </div>
    </div>
  );l
};

export default NewBetButtons;
