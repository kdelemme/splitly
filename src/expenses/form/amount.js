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
      <div>
        <label>
          Amount <input type="number" value={amount} onChange={this.onChange} />
        </label>
      </div>
    );
  }
}

export default Amount;