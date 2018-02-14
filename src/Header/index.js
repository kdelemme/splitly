import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ match }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
      <a className="navbar-brand" href="#">
        Splitly
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to={`${match.url}/expenses`}>
              Expenses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to={`${match.url}/friends`}>
              Friends
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to={`${match.url}/balances`}>
              Balances
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to={`${match.url}/settings`}>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
