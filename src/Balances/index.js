import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  expenses: state.expenses,
  friends: state.friends
});

export class Balances extends Component {
  render() {
    return <h1>Balances</h1>;
  }
}

export default connect(mapStateToProps)(Balances);
