import React, { Component } from "react";

class Reason extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { reason } = this.props;
    return (
      <div className="form-group col-sm-6">
        <label>Reason</label>
        <input className="form-control form-control-sm" type="text" value={reason} onChange={this.onChange} />
      </div>
    );
  }
}

export default Reason;
