import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "./Balance";

export class Balances extends Component {
  render() {
    const { expenses, friends } = this.props;

    return (
      <div className="row pt-5">
        <div className="col-12">
          <h1>Balances</h1>
          {friends.map(friend => <Balance friend={friend} {...this.props} />)}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Balances);
