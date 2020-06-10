import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const context = useContext(GlobalContext);
  return (
    <div>
      <h3>Add new transaction</h3>
      <div id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={() => handleAddItems({ text, amount }, context)}
          className="btn"
        >
          Add transaction
        </button>
      </div>
    </div>
  );
};

const handleAddItems = (data, context) => {
  // console.log("hello I am here");
  context.dispatch({
    type: "ADD_ITEMS",
    payload: data,
  });
};

export default AddTransaction;
