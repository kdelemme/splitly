// @flow
import React, { Component } from "react";
import type { UUID, FriendType, ExpenseType, CurrencyType } from "../Types";

class Expense extends Component<{ expense: ExpenseType, friends: Array<FriendType>, currency: CurrencyType }> {
  findNameById = (id: UUID) => {
    const friend = this.props.friends.find(f => f.id === id);
    return friend === undefined ? "" : friend.name;
  };

  renderDetails(friends: Array<FriendType>, expense: ExpenseType) {
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
    const { expense, friends, currency } = this.props;

    return (
      <li key={expense.id}>
        <p className="lead mb-0">
          {expense.amount}
          {currency.symbol} for {expense.reason}
        </p>
        {this.renderDetails(friends, expense)}
      </li>
    );
  }
}

export default Expense;
