import React, { Component } from "react";
import { connect } from "react-redux";

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.amount} paid by {expense.paidBy.name} for {expense.paidFor.length} friends
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(state => state)(ExpenseList);
