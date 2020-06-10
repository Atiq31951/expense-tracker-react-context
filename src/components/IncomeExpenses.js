import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpences = () => {
  const context = useContext(GlobalContext);
  const totalIncome = context.state.transactions.reduce((sum, obj) => {
    return sum + (obj.amount < 0 ? 0 : obj.amount);
  }, 0)

  const totalExpense = context.state.transactions.reduce((sum, obj) => {
    return sum + (obj.amount > 0 ? 0 : -obj.amount);
  }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${totalExpense}
        </p>
      </div>
    </div>
  );
};
export default IncomeExpences;
