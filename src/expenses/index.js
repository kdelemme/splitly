import React, { Component } from "react";
import { connect } from "react-redux";

import ExpenseForm from "./expense-form";
import { addExpense } from "./actions";

class Expenses extends Component {
  render() {
    const { friends, dispatch } = this.props;
    const dispatchAddExpense = expense => dispatch(addExpense(expense));

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} onSubmit={dispatchAddExpense} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
