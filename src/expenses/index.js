import React, { Component } from "react";

import { connect } from "react-redux";

import ExpenseForm from "./expense-form";
import ExpenseList from "./expense-list";

import { addExpense } from "./actions";

class Expenses extends Component {
  render() {
    const { friends, expenses, dispatch } = this.props;
    const dispatchAddExpense = expense => dispatch(addExpense(expense));

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} onSubmit={dispatchAddExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
