import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Friends from "./friends/friends";
import FriendForm from "./friend-form/friend-form";
import ExpenseForm from "./expense-form/expense-form";
import Expenses from "./expenses/expenses";

import reducers from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div className="container">
        <FriendForm />
        <Friends />
        <ExpenseForm />
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
