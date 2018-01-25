import React, { Component } from "react";

class Amount extends Component {
  onChange = event => this.props.onChange(event.target.value);

  render() {
    const { amount } = this.props;
    return (
      <div className="form-group col-sm-6">
        <label>Amount</label>
        <input className="form-control" type="text" value={amount} onChange={this.onChange} />
      </div>
    );
  }
}

export default Amount;
