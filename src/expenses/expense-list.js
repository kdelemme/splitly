import React, { Component } from "react";

class ExpenseList extends Component {
  render() {
    const expenses = this.props.expenses.map(expense => (
      <li key={expense.id}>
        {expense.amount} paid by {expense.paidBy.name} for {expense.paidFor.length} friends
      </li>
    ));

    return <ul>{expenses}</ul>;
  }
}

export default ExpenseList;
