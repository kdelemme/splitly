import React, { Component } from "react";
import { connect } from "react-redux";

class Expenses extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ul className="list list-unstyled">
          {expenses.map(expense => (
            <li key={expense.id}>
              <p className="lead p-b-0">{expense.amount} for {expense.reason}</p>
              <p className="small">Paid by {expense.paidBy.name}</p>
              <p className="small">Involving: {expense.participants.map(p => p.name).join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
