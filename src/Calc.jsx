import React, { useState } from "react";
import './calc.css'

function Calc() {
  const [btcAmount, setBtcAmount] = useState(1);

  const onChangeHandler = (event) => {
    setBtcAmount(event.target.value);
  };
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  let formatterSek = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SEK',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div>
      <input
        className='input'
        type="number"
        pattern="^-?[0-9]\d*\.?\d*$"
        onChange={onChangeHandler}
        value={btcAmount}
      />

      <h1>$100k = {formatter.format(btcAmount*100000)} / {formatterSek.format(btcAmount*(100000*8.31))}</h1>
      <h1>$200k = {formatter.format(btcAmount*200000)} / {formatterSek.format(btcAmount*(200000*8.31))}</h1>
      <h1>$500k = {formatter.format(btcAmount*500000)} / {formatterSek.format(btcAmount*(500000*8.31))}</h1>
      <h1>$1m = {formatter.format(btcAmount*1000000)} / {formatterSek.format(btcAmount*(1000000*8.31))}</h1>
      <h1>$5m = {formatter.format(btcAmount*5000000)} / {formatterSek.format(btcAmount*(5000000*8.31))}</h1>
      <h1>$10m = {formatter.format(btcAmount*10000000)} / {formatterSek.format(btcAmount*(10000000*8.31))}</h1>
    </div>
  );
}

export default Calc;
