import React, { Component } from "react";

class ExpenseList extends Component {
  render() {
    const expenses = this.props.expenses.map(expense => (
      <li key={expense.id}>
        {expense.amount} paid by {expense.paidBy[0].name} for {expense.paidFor.length}
      </li>
    ));

    return <ul>{expenses}</ul>;
  }
}

export default ExpenseList;
