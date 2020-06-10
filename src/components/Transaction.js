import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = (props) => {
  const { transaction } = props;
  const sign =
    transaction.amount < 0 ? "-" : transaction.amount === 0 ? "" : "+";
  const context = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${transaction.amount}
        </span>{" "}
        <button
          className="delete-btn"
          onClick={() => handelDeleteItem(transaction.id, context)}
        >
          X
        </button>
      </li>
    </div>
  );
};

const handelDeleteItem = (id, Context) => {
  Context.dispatch({ type: "REMOVE_ITEM", payload: id });
};

export default Transaction;
