import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {state.transactions.map((transaction) => {
          return (
            <Transaction transaction={transaction} key={transaction.key} />
          );
        })}
      </ul>
    </div>
  );
};
export default TransactionList;
