import React, { Component } from 'react';
import { ExceptionInfo } from '_debugger';

class Expense extends Component {
  renderDetails(toggled, expense) {
    if (!toggled) {
      return null;
    }

    return (
      <div>
        <p className="small mb-0">Paid by {expense.paidBy.name}</p>
        <p className="small">Involve: {expense.participants.map(p => p.name).join(", ")}</p>
      </div>
    )
  }

  render() {
    const { expense, toggled, onToggle } = this.props;

    return (
      <li key={expense.id} onClick={onToggle}>
        <p className="lead mb-0">{expense.amount} for {expense.reason}</p>
        {this.renderDetails(toggled, expense)}
      </li>
    );
  }
}

export default Expense;
