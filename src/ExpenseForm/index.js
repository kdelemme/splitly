import React, { Component } from "react";
import { connect } from "react-redux";

import { Amount, Reason, Payer, Participants } from "./Form";
import { addExpense } from "./actions";

export class ExpenseForm extends Component {
  state = { reason: "", amount: "", payer: null, participants: [] };

  onPayerChange = payer => {
    this.setState({ payer });
  };

  onParticipantsChange = participants => {
    this.setState({ participants });
  };

  onReasonChange = reason => {
    this.setState({ reason });
  };

  onAmountChange = amount => {
    this.setState({ amount });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(addExpense(this.state));
    this.resetState();
  };

  resetState = () => {
    this.setState({ reason: "", amount: "", payer: null, participants: [] });
  };

  render() {
    const { friends } = this.props;
    const { amount, reason, payer, participants } = this.state;

    return (
      <div className="row">
        <h1 className="col-12">Add expense</h1>
        <form className="form col-12" onSubmit={this.onSubmit}>
          <div className="form-row">
            <Reason reason={reason} onChange={this.onReasonChange} />
            <Amount amount={amount} onChange={this.onAmountChange} />
          </div>
          <div className="form-row">
            <Payer payer={payer} friends={friends} onChange={this.onPayerChange} />
            <Participants participants={participants} friends={friends} onChange={this.onParticipantsChange} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(ExpenseForm);
