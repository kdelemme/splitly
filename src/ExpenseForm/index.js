import React, { Component } from "react";
import { connect } from "react-redux";

import { Amount, Reason, Payer, Participants } from "./Form";
import { addExpense } from "./actions";

export class ExpenseForm extends Component {
  state = { reason: "", amount: "", payer: null, participants: [] };

  onChange = name => value => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(addExpense(this.state));
    this.resetState();
  };

  isValid = () => {
    const { amount, reason, payer, participants } = this.state;
    if (Number(amount) != NaN && amount > 0 && reason.length > 0 && payer && participants.length > 0) {
      return true;
    }
    return false;
  };

  resetState = () => {
    this.setState({ reason: "", amount: "", payer: null, participants: [] });
  };

  hasFriends = () => {
    return this.props.friends && this.props.friends.length > 0;
  };

  renderForm = () => {
    const { amount, reason, payer, participants } = this.state;
    const { friends } = this.props;
    if (!this.hasFriends()) {
      return <p className="col-12 lead">Add some friends...</p>;
    }

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <Reason reason={reason} onChange={this.onChange("reason")} />
        <Amount amount={amount} onChange={this.onChange("amount")} />

        <Payer payer={payer} friends={friends} onChange={this.onChange("payer")} />
        <Participants participants={participants} friends={friends} onChange={this.onChange("participants")} />

        <button type="submit" className="btn btn-primary ml-3" disabled={!this.isValid()}>
          Submit
        </button>
      </form>
    );
  };

  render() {
    const { friends } = this.props;
    return (
      <div className="row">
        <h1 className="col-12">Add expense</h1>
        {this.renderForm()}
      </div>
    );
  }
}

export default connect(state => state)(ExpenseForm);
