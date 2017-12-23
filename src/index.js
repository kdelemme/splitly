import React, { Component } from "react";
import ReactDOM from "react-dom";

import Friends from "./friends";
import Expenses from "./expenses";

class App extends Component {
  render() {
    return (
      <div>
        <Friends />
        <Expenses />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
