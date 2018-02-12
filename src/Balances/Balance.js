import React, { Component } from "react";

class Balance extends Component {
  computeOwedBalances = () => {
    const { friend, expenses, friends } = this.props;

    const balances = friends.map(f => ({
      id: f.id,
      name: f.name,
      owe: 0
    }));

    const paidExpenses = expenses.filter(expense => expense.payer === friend.id);
    paidExpenses.forEach(expense => {
      expense.participants.forEach(participant => {
        balances.find(b => b.id === participant).owe += Math.round(expense.amount / expense.participants.length, 2);
      });
    });

    return balances;
  };

  renderOwedBalances = () => {
    const balances = this.computeOwedBalances();
    const { friend } = this.props;

    return balances.filter(balance => balance.id !== friend.id).map(balance => (
      <li key={balance.id}>
        {friend.name} is owed {balance.owe} by {balance.name}
      </li>
    ));
  };

  render() {
    const { friend, friends, expenses } = this.props;
    return (
      <div>
        <p className="lead">{friend.name}'s Balance</p>
        <ul>{this.renderOwedBalances()}</ul>
      </div>
    );
  }
}

export default Balance;
