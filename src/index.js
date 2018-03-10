import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header";
import { FriendsContainer, ExpensesContainer } from "./Containers";
import { store } from "./configureStore";

import Settings from "./Settings";
import Balances from "./Balances";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Header match={match} />
        <main className="container mt-5">
          <Switch>
            <Route path={`${match.url}/expenses`} component={ExpensesContainer} />
            <Route path={`${match.url}/friends`} component={FriendsContainer} />
            <Route path={`${match.url}/balances`} component={Balances} />
            <Route path={`${match.url}/settings`} component={Settings} />
            <Redirect from={match.url} to={`${match.url}/expenses`} />
          </Switch>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={App} />
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
