import React, { Component } from "react";
import { connect } from "react-redux";

import { Amount, Reason, FriendsSelection } from "./form";
import { addExpense } from "./actions";

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", paidBy: {}, participants: [] };

    this.onReasonChange = this.onReasonChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPaidByChange = this.onFriendsSelection.bind(this, "paidBy");
    this.onParticipantsChange = this.onFriendsSelection.bind(this, "participants");
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
    const { dispatch } = this.props;
    dispatch(addExpense(this.state));
    this.resetState();
  }

  resetState() {
    this.setState({ reason: "", amount: "", paidBy: {}, participants: [] });
  }

  render() {
    const { friends } = this.props;
    const { amount, reason, paidBy, participants } = this.state;

    return (
      <div className="row">
        <h1 className="col-12">Add expense</h1>
        <form className="form col-12" onSubmit={this.onSubmit}>
          <div className="form-row">
            <Reason reason={reason} onChange={this.onReasonChange} />
            <Amount amount={amount} onChange={this.onAmountChange} />
          </div>
          <FriendsSelection friends={friends} multiple={false} label="Paid By" onChange={this.onPaidByChange} />
          <FriendsSelection friends={friends} multiple={true} label="Participants" onChange={this.onParticipantsChange} />
          <button type="submit" className="btn btn-primary btn-sm">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(ExpenseForm);
