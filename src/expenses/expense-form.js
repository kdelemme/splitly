import React, { Component } from "react";

import { Amount, Reason, FriendsSelection } from "./form";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", paidBy: [], paidFor: [] };

    this.onReasonChange = this.onReasonChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPaidByChange = this.onFriendsSelection.bind(this, "paidBy");
    this.onPaidForChange = this.onFriendsSelection.bind(this, "paidFor");
  }

  onReasonChange(reason) {
    this.setState({ reason });
  }

  onAmountChange(amount) {
    this.setState({ amount });
  }

  onFriendsSelection(stateName, value) {
    this.setState({ [stateName]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { friends } = this.props;
    const { amount, reason } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Reason reason={reason} onChange={this.onReasonChange} />
        <Amount amount={amount} onChange={this.onAmountChange} />
        <FriendsSelection friends={friends} label="Paid By" onChange={this.onPaidByChange} />
        <FriendsSelection friends={friends} label="Paid For" onChange={this.onPaidForChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ExpenseForm;
