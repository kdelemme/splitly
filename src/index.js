import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Friends from "./friends";
import Expenses from "./expenses";

import reducers from "./reducers";

const store = createStore(reducers);

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
