import React from "react";
import expensetracker from "../../../Photos/expensetracker.png";
import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  return (
        <div>
          <h3>Expense-Tracker</h3>
          <div>
            <img
              className="expensetracker-img"
              src={expensetracker}
              alt="expensetracker"
            />
          </div>
          <button className="btn-expense">Show Details</button>
        </div>
  );
};

export default ExpenseTracker;
