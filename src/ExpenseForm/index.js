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
    if (amount > 0 && reason.length > 0 && payer && participants.length > 0) {
      return true;
    }
    return false;
  };

  resetState = () => {
    this.setState({ reason: "", amount: "", payer: null, participants: [] });
  };

  render() {
    const { friends } = this.props;
    const { amount, reason, payer, participants } = this.state;
    const isValid = this.isValid();

    return (
      <div className="row">
        <h1 className="col-12">Add expense</h1>
        <form className="form col-12" onSubmit={this.onSubmit}>
          <Reason reason={reason} onChange={this.onChange("reason")} />
          <Amount amount={amount} onChange={this.onChange("amount")} />

          <Payer payer={payer} friends={friends} onChange={this.onChange("payer")} />
          <Participants participants={participants} friends={friends} onChange={this.onChange("participants")} />

          <button type="submit" className="btn btn-primary ml-3" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(ExpenseForm);
