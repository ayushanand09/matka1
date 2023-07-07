// import React, { useState } from "react";
// import "./SP.scss";

// const SPbuttons = () => {
//   const [selectSP, setSelectSP] = useState(null);

//   // const handleButtonClick = (buttonName) => {
//   //   if(selectSP === buttonName){
//   //     setSelectSP(null);
//   //   }
//   //   else{
//   //     setSelectSP(buttonName);
//   //   }
//   // };

//   const handleSelectClicki = (e) => {
//     if(selectSP === e){
//       // console.log(selectSP);
//       setSelectSP(null);
//     }
//     else{
//       // console.log(selectSP);
//       setSelectSP(e.target.value);
//     }
//     // setSelectSP(e.target.value);
//     console.log(e.target.value);
//   };

//   const renderContent = () => {
//     if(selectSP !== null){
//       switch (selectSP) {
//         case 1:
//           return (
//             <>
//               <div className="buttons">
//                 <button>Button 1 - Set 1</button>
//                 <button>Button 1 - Set 2</button>
//                 <button>Button 1 - Set 3</button>
//               </div>
//             </>
//           );
//         case 2:
//           return (
//             <div>
//               <h2>Content for DP</h2>
//               {/* Add specific content for DP button */}
//             </div>
//           );
//         case 3:
//           return (
//             <div>
//               <h2>Content for DP</h2>
//               {/* Add specific content for DP button */}
//             </div>
//           );
//         case 4:
//           return (
//             <div>
//               <h2>Content for TP</h2>
//               {/* Add specific content for TP button */}
//             </div>
//           );
//         case 5:
//           return (
//             <div>
//               <h2>Content for JODI</h2>
//               {/* Add specific content for JODI button */}
//             </div>
//           );
//         case 6:
//           return (
//             <div>
//               <h2>Content for Half Sangam</h2>
//               {/* Add specific content for Half Sangam button */}
//             </div>
//           );
//         case 7:
//           return (
//             <div>
//               <h2>Content for Full Sangam</h2>
//               {/* Add specific content for Full Sangam button */}
//             </div>
//           );
//         case 8:
//           return (
//             <div>
//               <h2>Content for Cycle Patti</h2>
//               {/* Add specific content for Cycle Patti button */}
//             </div>
//           );
//         case 9:
//           return (
//             <div>
//               <h2>Content for Cycle Patti</h2>
//               {/* Add specific content for Cycle Patti button */}
//             </div>
//           );
//         default:
//           return null;
//       }
//     };
//     return null;
//   }
  
//   return (
//     <div className="sp-button-content">
//       {/* <div>
//         <button value={1} onClick={handleSelectClick}>
//           SELECT ALL 1 <span className="angle"> ^ </span>{" "}
//         </button>
//         {
//         selectSP === 1 ?
//         renderContent(selectSP) :
//          ""}
//       </div> */}

//       <button value={2} onClick={handleSelectClicki}>
//       {/* <button value={2} onClick={handleButtonClick(2)}> */}
//         SELECT ALL 2 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={3} onClick={handleSelectClicki}>
//         SELECT ALL 3 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={4} onClick={handleSelectClicki}>
//         SELECT ALL 4 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={5} onClick={handleSelectClicki}>
//         SELECT ALL 5 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={6} onClick={handleSelectClicki}>
//         SELECT ALL 6 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={7} onClick={handleSelectClicki}>
//         SELECT ALL 7 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={8} onClick={handleSelectClicki}>
//         SELECT ALL 8 <span className="angle"> ^ </span>{" "}
//       </button>
//       <button value={9} onClick={handleSelectClicki}>
//         SELECT ALL 9 <span className="angle"> ^ </span>{" "}
//       </button>
//       {renderContent()}
//     </div>
//   );
// };

// export default SPbuttons;

import React, { useState } from "react";
import "./SP.scss";

const SPbuttons = () => {
  const [selectSP, setSelectSP] = useState(null);

  const handleSelectClick = (buttonId) => {
    if (selectSP === buttonId) {
      setSelectSP(null);
    } else {
      
      setSelectSP(buttonId);
    }
  };

  const renderContent = () => {
    if (selectSP !== null) {
      switch (selectSP) {
        case 1:
          return (
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
            <div className="buttons">
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
    <div className="sp-button-content">
      <button value={1} onClick={() => handleSelectClick(1)}>
        <span className="sp-txt"> SELECT ALL 1 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={2} onClick={() => handleSelectClick(2)}>
        <span className="sp-txt"> SELECT ALL 2 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={3} onClick={() => handleSelectClick(3)}>
        <span className="sp-txt"> SELECT ALL 3 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={4} onClick={() => handleSelectClick(4)}>
        <span className="sp-txt"> SELECT ALL 4 </span> 
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={5} onClick={() => handleSelectClick(5)}>
        <span className="sp-txt"> SELECT ALL 5 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={6} onClick={() => handleSelectClick(6)}>
        <span className="sp-txt"> SELECT ALL 6 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={7} onClick={() => handleSelectClick(7)}>
        <span className="sp-txt"> SELECT ALL 7 </span> 
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={8} onClick={() => handleSelectClick(8)}>
        <span className="sp-txt"> SELECT ALL 8 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      <button value={9} onClick={() => handleSelectClick(9)}>
        <span className="sp-txt"> SELECT ALL 9 </span>
        <span className="angle"> ^ </span>{" "}
      </button>

      {renderContent()}
    </div>
  );
};

export default SPbuttons;