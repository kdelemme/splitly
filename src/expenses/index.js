import React, { Component } from "react";

import { connect } from "react-redux";

import ExpenseForm from "./expense-form";

class Expenses extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    console.log(expense);
  }

  render() {
    const { friends } = this.props;

    return (
      <div>
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
