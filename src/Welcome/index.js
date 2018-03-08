import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

class Welcome extends Component {
  renderGetStarted() {
    const id = v4();
    return (
      <Link to={`/${id}`} className="btn btn-primary">
        Get started now
      </Link>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome</h1>
            {this.renderGetStarted()}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
