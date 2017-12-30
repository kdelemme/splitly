import React, { Component } from "react";

import { connect } from "react-redux";

import FriendsSelection from "./form/friends-selection";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", paidBy: [], paidFor: [] };

    this.onReasonChange = this.onReasonChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPaidByChange = this.onFriendsSelection.bind(this, "paidBy");
    this.onPaidForChange = this.onFriendsSelection.bind(this, "paidFor");
  }

  onReasonChange(event) {
    this.setState({ reason: event.target.value });
  }

  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  onFriendsSelection(stateName, value) {
    this.setState({ [stateName]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  renderReason() {
    return (
      <div>
        <label>
          Reason <input type="text" value={this.state.reason} onChange={this.onReasonChange} />
        </label>
      </div>
    );
  }

  renderAmount() {
    return (
      <div>
        <label>
          Amount <input type="number" value={this.state.amount} onChange={this.onAmountChange} />
        </label>
      </div>
    );
  }

  render() {
    const { friends } = this.props;

    return (
      <div>
        <h1>Expenses</h1>
        <form onSubmit={this.onSubmit}>
          {this.renderReason()}
          {this.renderAmount()}
          <FriendsSelection friends={friends} label="Paid By" onChange={this.onPaidByChange} />
          <FriendsSelection friends={friends} label="Paid For" onChange={this.onPaidForChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
