import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Friends from "./friends/friends";
import FriendForm from "./friend-form/friend-form";
import ExpenseForm from "./expense-form/expense-form";
import Expenses from "./expenses/expenses";

import { store } from "./configureStore";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <FriendForm />
            <Friends />
          </div>
          <div className="col-sm-8">
            <ExpenseForm />
            <Expenses />
          </div>
        </div>
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
