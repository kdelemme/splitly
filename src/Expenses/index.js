import React, { Component } from "react";
import { connect } from "react-redux";

import Expense from "./expense";

class Expenses extends Component {
  render() {
    const { expenses, friends, currency } = this.props;

    return (
      <div className="row">
        <h1 className="col-12">Expenses</h1>
        <ul className="col-12 list list-unstyled">
          {expenses.map(expense => (
            <Expense key={expense.id} expense={expense} friends={friends} currency={currency} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  friends: state.friends,
  currency: state.settings.currency
});

export default connect(mapStateToProps)(Expenses);
