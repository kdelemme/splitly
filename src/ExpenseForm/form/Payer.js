import React, { Component } from "react";

export default class Payer extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { payer, friends } = this.props;

    return (
      <div className="form-group col-sm-6">
        <legend className="col-form-label pt-0">Payer</legend>
        {friends.map(({ name, id }) => {
          return (
            <div key={id} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payer"
                id={`payer${id}`}
                value={id}
                checked={payer === id}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor={`payer${id}`}>
                {name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
