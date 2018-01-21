import React, { Component } from "react";

class Amount extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { amount } = this.props;
    return (
      <div className="form-group col-sm-6">
        <label>Amount</label>
        <input className="form-control form-control-sm" type="text" value={amount} onChange={this.onChange} />
      </div>
    );
  }
}

export default Amount;
