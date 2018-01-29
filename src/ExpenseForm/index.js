import React, { Component } from "react";
import { connect } from "react-redux";

import { Amount, Reason, FriendsSelection } from "./form";
import { addExpense } from "./actions";

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { reason: "", amount: "", payer: null, participants: [] };

    this.onReasonChange = this.onReasonChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handlePayer = event => {
    this.setState({ payer: event.target.value });
  };

  handleParticipants = event => {
    if (event.target.checked) {
      this.setState({
        participants: [...this.state.participants, event.target.value]
      });
    } else {
      this.setState({
        participants: this.state.participants.filter(p => p !== event.target.value)
      });
    }
  };

  onReasonChange(reason) {
    this.setState({ reason });
  }

  onAmountChange(amount) {
    this.setState({ amount });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addExpense(this.state));
    this.resetState();
  }

  resetState() {
    this.setState({ reason: "", amount: "", payer: null, participants: [] });
  }

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
            <div className="form-group col-sm-6">
              <legend className="col-form-label pt-0">Payer</legend>
              {friends.map(({ name, id }, index) => {
                return (
                  <div key={id} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payer"
                      id={`payer${id}`}
                      value={id}
                      checked={payer ? payer === id : index === 0}
                      onChange={this.handlePayer}
                    />
                    <label className="form-check-label" for={`payer${id}`}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="form-group col-sm-6">
              <legend className="col-form-label pt-0">Participants</legend>
              {friends.map(({ name, id }) => {
                return (
                  <div key={id} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`participant${id}`}
                      value={id}
                      onChange={this.handleParticipants}
                      checked={participants.indexOf(id) > -1}
                    />
                    <label className="form-check-label" for={`participant${id}`}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </div>
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
