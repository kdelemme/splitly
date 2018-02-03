import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Friends from "./Friends";
import FriendForm from "./FriendForm";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expenses";

import { store } from "./configureStore";

import "bootstrap/dist/css/bootstrap.css";

const FriendsContainer = () => {
  return (
    <div className="col-12">
      <FriendForm />
      <Friends />
    </div>
  );
};

const ExpensesContainer = () => {
  return (
    <div className="col-12">
      <ExpenseForm />
      <Expenses />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container mt-5">
          <div className="row pt-5">
            <Route path="/friends" component={FriendsContainer} />
            <Route path="/expenses" component={ExpensesContainer} />
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
