import React, { Component } from "react";
import { connect } from "react-redux";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: null };

    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    this.setState((prevState) => ({ toggled: (prevState.toggled == id ? null : id) }));
  }

  render() {
    const { expenses } = this.props;
    const { toggled } = this.state;

    return (
      <div className="row">
        <h1>Expenses</h1>
        <ul className="list list-unstyled">
          {expenses.map(expense => (
            <li key={expense.id} onClick={() => this.toggle(expense.id)}>
              <p className="lead p-b-0">{expense.amount} for {expense.reason}</p>
              {toggled == expense.id &&
                (<div>
                  <p className="small">Paid by {expense.paidBy.name}</p>
                  <p className="small">Involve: {expense.participants.map(p => p.name).join(", ")}</p>
                </div>)
              }
            </li>
          ))}
        </ul>
      </div >
    );
  }
}

export default connect(state => state)(Expenses);
