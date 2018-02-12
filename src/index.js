import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import { FriendsContainer, ExpensesContainer, SettingsContainer } from "./Containers";
import { store } from "./configureStore";

import Balances from "./Balances";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container mt-5">
          <Route path="/friends" component={FriendsContainer} />
          <Route path="/expenses" component={ExpensesContainer} />
          <Route path="/balances" component={Balances} />
          <Route path="/settings" component={SettingsContainer} />
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
