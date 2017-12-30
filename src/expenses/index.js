import React, { Component } from "react";

import { connect } from "react-redux";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: "" };

    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaidByChange = this.onPaidByChange.bind(this);
  }

  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  onPaidByChange(event) {
    console.log(Array.from(event.target.selectedOptions));
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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

  renderPaidBySelection() {
    const { friends } = this.props;
    if (friends.length === 0) {
      return null;
    }

    return (
      <div>
        <select multiple onChange={this.onPaidByChange}>
          {friends.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Expenses</h1>
        <form onSubmit={this.onSubmit}>
          {this.renderAmount()}
          {this.renderPaidBySelection()}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
