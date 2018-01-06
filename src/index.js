import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Friends from "./friends";
import Expenses from "./expenses";
import ExpenseList from "./expenses/expense-list";

import reducers from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Friends />
        <Expenses />
        <ExpenseList />
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
