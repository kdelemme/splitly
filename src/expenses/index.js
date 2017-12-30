import React, { Component } from "react";

import { connect } from "react-redux";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", paidBy: [], paidFor: [] };

    this.onReasonChange - this.onReasonChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPaidByChange = this.onPaidByChange.bind(this);
    this.onPaidForChange = this.onPaidForChange.bind(this);
  }

  onReasonChange(event) {
    this.setState({ reason: event.target.value });
  }

  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  onPaidByChange(event) {
    const paidBy = Array.from(event.target.selectedOptions).map(option => ({ id: option.value, name: option.text }));
    this.setState({ paidBy });
  }

  onPaidForChange(event) {
    const paidFor = Array.from(event.target.selectedOptions).map(option => ({ id: option.value, name: option.text }));
    this.setState({ paidFor });
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

  renderFriendsSelection(label, onChange) {
    const { friends } = this.props;
    if (friends.length === 0) {
      return null;
    }

    return (
      <div>
        <label>
          {label}
          <select multiple onChange={onChange}>
            {friends.map(friend => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Expenses</h1>
        <form onSubmit={this.onSubmit}>
          {this.renderReason()}
          {this.renderAmount()}
          {this.renderFriendsSelection("Paid By", this.onPaidByChange)}
          {this.renderFriendsSelection("Paid For", this.onPaidForChange)}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
