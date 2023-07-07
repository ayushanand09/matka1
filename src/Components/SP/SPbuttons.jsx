import React, { useEffect, useState } from 'react';
import './SP.scss';

const SPbuttons = () => {
    const [selectSP, setSelectSP] = useState(0);
    const handleButtonClick = (buttonName) => {
      setSelectSP(buttonName);
    };
    const renderContent = () => {
      switch (selectSP) {
        case 1:
          return (
            <div className="buttons">
            </div>
          );
        case 2:
          return (
            <div>
              <h2>Content for DP</h2>
              {/* Add specific content for DP button */}
            </div>
          );
        case 3:
          return (
            <div>
              <h2>Content for DP</h2>
              {/* Add specific content for DP button */}
            </div>
          );
        case 4:
          return (
            <div>
              <h2>Content for TP</h2>
              {/* Add specific content for TP button */}
            </div>
          );
        case 5:
          return (
            <div>
              <h2>Content for JODI</h2>
              {/* Add specific content for JODI button */}
            </div>
          );
        case 6:
          return (
            <div>
              <h2>Content for Half Sangam</h2>
              {/* Add specific content for Half Sangam button */}
            </div>
          );
        case 7:
          return (
            <div>
              <h2>Content for Full Sangam</h2>
              {/* Add specific content for Full Sangam button */}
            </div>
          );
        case 8:
          return (
            <div>
              <h2>Content for Cycle Patti</h2>
              {/* Add specific content for Cycle Patti button */}
            </div>
          );
        case 9:
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
    const handleSelectClick = (e) => {
        setSelectSP(e.target.value);
        console.log(e.target.value);
    }
  return (
      <div className='sp-button-content'>
          <div>  
              <button value={1} onClick={handleSelectClick}>SELECT ALL 1</button>
              {
                  selectSP === 1?
                        renderContent(selectSP) :
                      ""
              }
          </div>
          <button value={2} onClick={handleSelectClick}>SELECT ALL 2</button>
          <button value={3} onClick={handleSelectClick}>SELECT ALL 3</button>
          <button value={4} onClick={handleSelectClick}>SELECT ALL 4</button>
          <button value={5} onClick={handleSelectClick}>SELECT ALL 5</button>
          <button value={6} onClick={handleSelectClick}>SELECT ALL 6</button>
          <button value={7} onClick={handleSelectClick}>SELECT ALL 7</button>
          <button value={8} onClick={handleSelectClick}>SELECT ALL 8</button>
          <button value={9} onClick={handleSelectClick}>SELECT ALL 9</button>
    </div>
  )
}

export default SPbuttons
