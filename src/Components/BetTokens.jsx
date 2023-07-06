import React from 'react';
import '../Css/BetToken.scss';
import Chip1 from '../Assets/Chips/chip_1.png'
import Chip5 from '../Assets/Chips/chip_5.png'
import Chip10 from '../Assets/Chips/chip_10.png'
import Chip20 from '../Assets/Chips/chip_20.png'
import Chip50 from '../Assets/Chips/chip_50.png'
import Chip100 from '../Assets/Chips/chip_100.png'
import Chip250 from '../Assets/Chips/chip_250.png'

const BetTokens = () => {
  return (
    <div className="token_container">
      <div className="main_tokens">
        <button value={1}>
          <img src={Chip1} alt="chip" />
        </button>
        <button value={5}>
          <img src={Chip5} alt="chip" />
        </button>
        <button value={10}>
          <img src={Chip10} alt="chip" />
        </button>
        <button value={20}>
          <img src={Chip20} alt="chip" />
        </button>
        <button value={50}>
          <img src={Chip50} alt="chip" />
        </button>
        <button value={100}>
          <img src={Chip100} alt="chip" />
        </button>
        <button value={250}>
          <img src={Chip250} alt="chip" />
        </button>
      </div>
    </div>
  );
}

export default BetTokens
