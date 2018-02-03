import React, { Component } from "react";
import { ExceptionInfo } from "_debugger";

class Expense extends Component {
  findNameById = id => {
    const friend = this.props.friends.find(f => f.id === id);
    return friend === undefined ? "" : friend.name;
  };

  renderDetails(toggled, friends, expense) {
    if (!toggled) {
      return null;
    }

    return (
      <div>
        <p className="small mb-0">Payer: {this.findNameById(expense.payer)}</p>
        <p className="small">
          Involve:{" "}
          {expense.participants
            .map(participant => this.findNameById(participant))
            .filter(p => p)
            .join(", ")}
        </p>
      </div>
    );
  }

  render() {
    const { expense, friends, currency, toggled, onToggle } = this.props;

    return (
      <li key={expense.id}>
        <p className="lead mb-0" onClick={onToggle}>
          {expense.amount}
          {currency} for {expense.reason}
        </p>
        {this.renderDetails(toggled, friends, expense)}
      </li>
    );
  }
}

export default Expense;
