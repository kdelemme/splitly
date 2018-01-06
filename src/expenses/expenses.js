import React, { Component } from "react";
import { connect } from "react-redux";

class Expenses extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              {expense.amount} paid by {expense.paidBy.name} for {expense.paidFor.length} friends
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
