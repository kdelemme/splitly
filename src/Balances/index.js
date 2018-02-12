import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  expenses: state.expenses,
  friends: state.friends
});

export class Balances extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div className="row pt-5">
        <div className="col-12">
          <h1>Balances</h1>

          <ul>
            <li>Alice is own 50 by Bob</li>
            <li>Bob owns 50 to alice</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Balances);
