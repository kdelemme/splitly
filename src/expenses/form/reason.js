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
      <div className="form-group">
        <label>
          Reason <input className="form-control" type="text" value={reason} onChange={this.onChange} />
        </label>
      </div>
    );
  }
}

export default Reason;
