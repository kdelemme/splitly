import React, { Component } from "react";

import { connect } from "react-redux";

import ExpenseForm from "./expense-form";

class Expenses extends Component {
  render() {
    const { friends } = this.props;

    return (
      <div>
        <h1>Expenses</h1>
        <ExpenseForm friends={friends} />
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
