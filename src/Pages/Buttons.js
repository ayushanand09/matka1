import React, { useState, useEffect } from "react";

const ButtonContent = ({ content, onBack, id }) => {
  return (
    <div>
      <div>{content}</div>
      {/* {id == 1 ? (
          ""
        ) 
        : (
          <button className="backANK" onClick={onBack}>
            BACK
          </button>
        )
        } */}
    </div>
  );
};

const Buttons = () => {
  const [showSPButtons1, setShowButtons1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [showSPButtons2, setShowButtons2] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [showSPButtons3, setShowButtons3] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [showSPButtons4, setShowButtons4] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [showSPButtons5, setShowButtons5] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [showSPButtons6, setShowButtons6] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [showSPButtons7, setShowButtons7] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [showSPButtons8, setShowButtons8] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [showSPButtons9, setShowButtons9] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);

  // const showSPBtns = () => {
  //   setDisplaySPBtns(true);
  // };

  // const hideSPBtns = () => {
  //   setDisplaySPBtns(false);
  // };

  var click = 0;
  const handleTriggerClick1 = () => {
    console.log(click);
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked1(false);
      setShowButtons1(false);
    } else {
      setIsClicked1(true);
      setShowButtons1(true);
    }
  };
  const handleTriggerClick2 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked2(false);
      setShowButtons2(false);
    } else {
      setIsClicked2(true);
      setShowButtons2(true);
    }
  };
  const handleTriggerClick3 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked3(false);
      setShowButtons3(false);
    } else {
      setIsClicked3(true);
      setShowButtons3(true);
    }
  };
  const handleTriggerClick4 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked4(false);
      setShowButtons4(false);
    } else {
      setIsClicked4(true);
      setShowButtons4(true);
    }
  };
  const handleTriggerClick5 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked5(false);
      setShowButtons5(false);
    } else {
      setIsClicked5(true);
      setShowButtons5(true);
    }
  };
  const handleTriggerClick6 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked6(false);
      setShowButtons6(false);
    } else {
      setIsClicked6(true);
      setShowButtons6(true);
    }
  };
  const handleTriggerClick7 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked7(false);
      setShowButtons7(false);
    } else {
      setIsClicked7(true);
      setShowButtons7(true);
    }
  };
  const handleTriggerClick8 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked8(false);
      setShowButtons8(false);
    } else {
      setIsClicked8(true);
      setShowButtons8(true);
    }
  };
  const handleTriggerClick9 = () => {
    click = click + 1;
    if (click % 2 == 0) {
      setIsClicked9(false);
      setShowButtons9(false);
    } else {
      setIsClicked9(true);
      setShowButtons9(true);
    }
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleBack = () => {
    setActiveButton(null);
  };

  const [objects, setObjects] = useState({});

  const handleClick = (id) => {
    setActiveButton(id);
    if (id === 1) {
      console.log("hi");
      setObjects({ type: "ANK" });
      // setObjects(...objects, {"type": "ANK"})
    }
    console.log(objects);
  };

  const buttons = [
    {
      name: "ANK",
      id: 1,
      // className: "Primary-btn",
      nestedClasses: ["buttons", "Primary-btn", "btn1"],
      content: (
        <>
          <div className="buttons">
            <div className="ANK">
              <button className="ANK2">ANK</button>
              <button value={1}>1</button>
              <button value={2}>2</button>
              <button value={3}>3</button>
              <button value={4}>4</button>
              <button value={5}>5</button>
              <br></br>
              <button className="backANK" onClick={handleBack}>
                BACK
              </button>
              <button value={6}>6</button>
              <button value={7}>7</button>
              <button value={8}>8</button>
              <button value={9}>9</button>
              <button value={0}>0</button>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "SP",
      id: 2,
      nestedClasses: ["buttons", "Primary-btn"],
      // className: "Primary-btn",
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">SP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              {/* SELECT ALL 1 <span className={`angle ${isClicked ? 'downtick-animation' : 'uptick-animation'}`}> ^ </span>{" "} */}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "DP",
      id: 3,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">DP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "TP",
      id: 4,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">TP</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "JODI",
      id: 5,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">JODI</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "HALF SANGAM",
      id: 6,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div className="new-sp-set">
            <button className="SP-New">HALF SANGAM</button>
            <button
              className="backANK"
              onClick={() => {
                handleBack();
              }}
            >
              BACK
            </button>
          </div>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
          <br></br>
        </>
      ),
    },
    {
      name: "FULL SANGAM",
      id: 7,
      nestedClasses: ["buttons", "Primary-btn"],
      content: (
        <>
          <div id="SP-btns">
            <button className="SP1" onClick={handleTriggerClick1}>
              {" "}
              SELECT ALL 1{" "}
              <span
                className={`angle ${
                  isClicked1 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons1 && (
              <>
                <div className="SP1-options-set1">
                  <button> 137 </button>
                  <button> 146 </button>
                  <button> 236 </button>
                  <button> 245 </button>
                  <button> 290 </button>
                  <button> 380 </button>
                </div>
                <div className="SP1-options-set2">
                  <button> 470 </button>
                  <button> 489 </button>
                  <button> 560 </button>
                  <button> 579 </button>
                  <button> 678 </button>
                  <button> 128 </button>
                </div>
              </>
            )}
            <button className="SP2" onClick={handleTriggerClick2}>
              {" "}
              SELECT ALL 2
              <span
                className={`angle ${
                  isClicked2 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons2 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP3" onClick={handleTriggerClick3}>
              {" "}
              SELECT ALL 3
              <span
                className={`angle ${
                  isClicked3 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons3 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP4" onClick={handleTriggerClick4}>
              {" "}
              SELECT ALL 4
              <span
                className={`angle ${
                  isClicked4 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons4 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP5" onClick={handleTriggerClick5}>
              {" "}
              SELECT ALL 5
              <span
                className={`angle ${
                  isClicked5 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons5 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP6" onClick={handleTriggerClick6}>
              {" "}
              SELECT ALL 6
              <span
                className={`angle ${
                  isClicked6 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons6 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP7" onClick={handleTriggerClick7}>
              {" "}
              SELECT ALL 7
              <span
                className={`angle ${
                  isClicked7 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons7 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP8" onClick={handleTriggerClick8}>
              {" "}
              SELECT ALL 8
              <span
                className={`angle ${
                  isClicked8 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons8 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
            <button className="SP9" onClick={handleTriggerClick9}>
              {" "}
              SELECT ALL 9
              <span
                className={`angle ${
                  isClicked9 ? "downtick-animation" : "uptick-animation"
                }`}
              >
                {" "}
                ^{" "}
              </span>{" "}
            </button>
            {showSPButtons9 && (
              <>
                <div className="SP2-options-set1">
                  <button> 570 </button>
                  <button> 237 </button>
                  <button> 480 </button>
                  <button> 156 </button>
                  <button> 390 </button>
                  <button> 147 </button>
                </div>
                <div className="SP2-options-set2">
                  <button> 679 </button>
                  <button> 345 </button>
                  <button> 138 </button>
                  <button> 589 </button>
                  <button> 246 </button>
                  <button> 129 </button>
                </div>
              </>
            )}
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="new-buttons">
        {activeButton ? (
          <ButtonContent
            content={
              buttons.find((button) => button.id === activeButton).content
            }
            onBack={handleBack}
            id={activeButton}
          />
        ) : (
          buttons.map((button) => (
            <button
              key={button.id}
              className={button.nestedClasses.join(" ")}
              onClick={() => handleClick(button.id)}
            >
              {button.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Buttons;
