import React from "react";
import Expenses from "../Expenses";
import ExpenseForm from "../ExpenseForm";

export const ExpensesContainer = () => {
  return (
    <div className="row pt-5">
      <div className="col-12 col-md-4">
        <ExpenseForm />
      </div>
      <div className="col-12 col-md-6">
        <Expenses />
      </div>
    </div>
  );
};
