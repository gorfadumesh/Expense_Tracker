import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  // const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(({ text, amount, id }) => (
          <li className={amount < 0 ? "minus" : "plus"}>
            {text}
            <span>
              {amount < 0 ? "-" : "+"}$ {Math.abs(amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => {
                deleteTransaction(id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
