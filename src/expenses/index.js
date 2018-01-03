import React, { Component } from "react";

import { connect } from "react-redux";

import ExpenseForm from "./expense-form";
import ExpenseList from "./expense-list";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    expense.id = Math.ceil(Math.random() * 100000);
    this.setState(({ expenses }) => ({ expenses: [...expenses, expense] }));
  }

  render() {
    const { friends } = this.props;
    const { expenses } = this.state;

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} onSubmit={this.onSubmit} />
        <ExpenseList expenses={expenses} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
