import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  expenses: state.expenses,
  friends: state.friends
});

export class Balances extends Component {
  render() {
    return (
      <div className="row pt-5">
        <div className="col-12">
          <h1>Balances</h1>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Balances);
