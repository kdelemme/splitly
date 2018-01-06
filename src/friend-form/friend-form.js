import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "./actions";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { name } = this.state;
    event.preventDefault();
    dispatch(addFriend({ name }));
    this.setState({ name: "" });
  }

  render() {
    const { name } = this.state;

    return (
      <div className="row">
        <h1>Add friend</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name <input className="form-control" type="text" value={name} onChange={this.handleChange} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(FriendForm);
