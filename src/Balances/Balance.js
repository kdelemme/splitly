import React, { Component } from "react";

const round = (number, precision) => {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

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
        balances.find(b => b.id === participant).owe += round(expense.amount / expense.participants.length, 2);
      });
    });

    return balances;
  };

  renderOwedBalances = () => {
    const balances = this.computeOwedBalances();
    const { friend, settings } = this.props;

    return balances.filter(balance => balance.id !== friend.id && balance.owe > 0).map(balance => (
      <li key={balance.id} data-attr-id={balance.id}>
        {friend.name} is owed {balance.owe}
        {settings.currency.symbol} by {balance.name}
      </li>
    ));
  };

  render() {
    const { friend } = this.props;
    return (
      <div>
        <p className="lead">{friend.name}'s Balance</p>
        <ul>{this.renderOwedBalances()}</ul>
      </div>
    );
  }
}

export default Balance;
