import React, { Component } from "react";

class Reason extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { reason } = this.props;
    return (
      <div className="form-group col-10">
        <label>Reason</label>
        <input className="form-control" type="text" value={reason} onChange={this.onChange} name="reason" />
      </div>
    );
  }
}

export default Reason;
