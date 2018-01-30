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
            <Reason reason={reason} onChange={this.onChange("reason")} />
            <Amount amount={amount} onChange={this.onChange("amount")} />
          </div>
          <div className="form-row">
            <Payer payer={payer} friends={friends} onChange={this.onChange("payer")} />
            <Participants participants={participants} friends={friends} onChange={this.onChange("participants")} />
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
