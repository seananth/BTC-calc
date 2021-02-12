import React, { useState } from "react";
import "./calc.css";

function Calc() {
  const [btcAmount, setBtcAmount] = useState(1);

  const onChangeHandler = (event) => {
    setBtcAmount(event.target.value);
  };
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let formatterSek = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });

  let sekPrice = 8.31;

  return (
    <div className="container">
      <div className="Input">
        <input
          id="input"
          className="Input-text"
          type="number"
          pattern="^-?[0-9]\d*\.?\d*$"
          onChange={onChangeHandler}
          value={btcAmount}
        />
      </div>

      <div className="numbers">
        <div className="numb">
          <h1>
            $100k = {formatter.format(btcAmount * 100000)} /{" "}
            {formatterSek.format(btcAmount * (100000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $200k = {formatter.format(btcAmount * 200000)} /{" "}
            {formatterSek.format(btcAmount * (200000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $300k = {formatter.format(btcAmount * 300000)} /{" "}
            {formatterSek.format(btcAmount * (300000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $500k = {formatter.format(btcAmount * 500000)} /{" "}
            {formatterSek.format(btcAmount * (500000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $1m = {formatter.format(btcAmount * 1000000)} /{" "}
            {formatterSek.format(btcAmount * (1000000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $5m = {formatter.format(btcAmount * 5000000)} /{" "}
            {formatterSek.format(btcAmount * (5000000 * sekPrice))}
          </h1>
        </div>
        <div className="numb">
          <h1>
            $10m = {formatter.format(btcAmount * 10000000)} /{" "}
            {formatterSek.format(btcAmount * (10000000 * sekPrice))}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Calc;
