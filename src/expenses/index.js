import React, { Component } from "react";

import { connect } from "react-redux";

import ExpenseForm from "./expense-form";
import { exec } from "child_process";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    this.setState(prevState => ({ expenses: [...prevState, expense] }));
  }

  render() {
    const { friends } = this.props;
    const { expenses } = this.state;

    return (
      <div>
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
