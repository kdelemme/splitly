import React, { Component } from "react";
import { connect } from "react-redux";

import { Amount, Reason, FriendsSelection } from "./form";
import { addExpense } from "./actions";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", paidBy: {}, paidFor: [] };

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
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(addExpense(this.state));
    this.resetState();
  }

  resetState() {
    this.setState({ reason: "", amount: "", paidBy: {}, paidFor: [] });
  }

  render() {
    const { friends } = this.props;
    const { amount, reason, paidBy, paidFor } = this.state;

    return (
      <div className="row">
        <h1>Add expense</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-row">
            <Reason reason={reason} onChange={this.onReasonChange} />
            <Amount amount={amount} onChange={this.onAmountChange} />
          </div>
          <FriendsSelection friends={friends} multiple={false} label="Paid By" onChange={this.onPaidByChange} />
          <FriendsSelection friends={friends} multiple={true} label="Paid For" onChange={this.onPaidForChange} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(ExpenseForm);
