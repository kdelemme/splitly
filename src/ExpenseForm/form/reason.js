import React, { Component } from "react";

class Reason extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { reason } = this.props;
    return (
      <div className="form-group col-sm-6">
        <label>Reason</label>
        <input className="form-control" type="text" value={reason} onChange={this.onChange} />
      </div>
    );
  }
}

export default Reason;
