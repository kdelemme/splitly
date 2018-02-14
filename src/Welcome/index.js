import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome</h1>
            <Link to="/abcd-1212-aaaa-12121212/">Start</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
