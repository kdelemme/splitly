import React, { Component } from "react";

import { connect } from "react-redux";

class Expenses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Expenses</h1>
      </div>
    );
  }
}

export default connect(state => state)(Expenses);
