import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const context = useContext(GlobalContext);
  const total = context.state.transactions.reduce((total, num) => {
    return total + num.amount;
  }, 0)

  return (
    <div>
      <h4>Your balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;
