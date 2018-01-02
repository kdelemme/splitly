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

  onFriendsSelection(stateProp, value) {
    this.setState({ [stateProp]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  }

  resetState() {
    this.setState({ reason: "", amount: "", paidBy: [], paidFor: [] });
  }

  render() {
    const { friends } = this.props;
    const { amount, reason, paidBy, paidFor } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <Reason reason={reason} onChange={this.onReasonChange} />
        <Amount amount={amount} onChange={this.onAmountChange} />
        <FriendsSelection
          friends={friends}
          multiple={false}
          selected={paidBy}
          label="Paid By"
          onChange={this.onPaidByChange}
        />
        <FriendsSelection
          friends={friends}
          multiple={true}
          selected={paidFor}
          label="Paid For"
          onChange={this.onPaidForChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
