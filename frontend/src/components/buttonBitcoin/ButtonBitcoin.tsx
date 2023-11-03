<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useCryptoPriceController, ChainSymbols } from "react-crypto-price";
import bitcoin from "../../assets/img/bitcoin.svg";

export default function ButtonBitcoin() {
  const { price } = useCryptoPriceController({ symbol: ChainSymbols.BTC });
  const [btcPrice, setBtcPrice] = useState(price);

  useEffect(() => {
    setBtcPrice(price);
  }, [price]);

  const roundedPrice = Math.round(parseFloat(btcPrice));

  const imageStyle = {
    backgroundColor: "#F6911D", 
  };

  const valueStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <div className="w-[230px] h-[50px] bg-[#F6911D] rounded-md flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center" style={imageStyle}>
          <img
            src={bitcoin}
            alt="Ícone Bitcoin"
            className="w-6 h-6"
          />
        </div>
        <h1 className="ml-2 text-black font-bold text-lg" style={valueStyle}>
          $ {roundedPrice}
        </h1>
      </div>
    </div>
  );
}
=======
export default function ButtonBitcoin(){
    return (
        <div>
            <div className="w-[230px] h-[50px] bg-[#F6911D] rounded-md flex items-center"><h1>$</h1></div>
        </div>
    )
}
>>>>>>> 426356f063fbd842400af104ab79562c2aacf0ae
