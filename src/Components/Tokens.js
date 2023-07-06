import React, { useState,useEffect } from "react";
import "../Css/Tokens.css"

const Tokens = () => {
  const [displayToken, setdisplayToken] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setdisplayToken(true);
    }, 15000);

    const hideTimeout = setTimeout(() => {
      setdisplayToken(false);
    }, 55000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      {displayToken && (
        <div className="tokens-outer">
          <div className="tokens">
            <button className="token1" value={1}></button>
            <button className="token2" value={5}></button>
            <button className="token3" value={10}></button>
            <button className="token4" value={20}></button>
            <button className="token5" value={50}></button>
            <button className="token6" value={100}></button>
            <button className="token7" value={250}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tokens;
