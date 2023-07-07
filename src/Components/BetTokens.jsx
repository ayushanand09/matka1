import React, { useEffect, useState } from 'react';
import '../Css/BetToken.scss';
import Chip1 from '../Assets/Chips/chip_1.png'
import Chip5 from '../Assets/Chips/chip_5.png'
import Chip10 from '../Assets/Chips/chip_10.png'
import Chip20 from '../Assets/Chips/chip_20.png'
import Chip50 from '../Assets/Chips/chip_50.png'
import Chip100 from '../Assets/Chips/chip_100.png'
import Chip250 from '../Assets/Chips/chip_250.png'

const BetTokens = () => {
  const onBetClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute("data-value"));
  }
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
      <div className="token_container">
        <div className="container main_tokens d-flex justify-content-center align-item-center">
          <button onClick={onBetClick} data-value={1}>
            <img src={Chip1} alt="chip" />
          </button>
          <button data-value={5} onClick={onBetClick}>
            <img src={Chip5} alt="chip" />
          </button>
          <button data-value={10} onClick={onBetClick}>
            <img src={Chip10} alt="chip" />
          </button>
          <button data-value={20} onClick={onBetClick}>
            <img src={Chip20} alt="chip" />
          </button>
          <button data-value={50} onClick={onBetClick}>
            <img src={Chip50} alt="chip" />
          </button>
          <button data-value={100} onClick={onBetClick}>
            <img src={Chip100} alt="chip" />
          </button>
          <button data-value={250} onClick={onBetClick}>
            <img src={Chip250} alt="chip" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BetTokens
