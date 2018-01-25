import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Friends from "./Friends";
import FriendForm from "./FriendForm";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expenses";

import { store } from "./configureStore";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <FriendForm />
            <Friends />
          </div>
          <div className="col-12 col-md-8">
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
