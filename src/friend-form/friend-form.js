import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "./actions";

export class FriendForm extends Component {
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
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-6">
            <label>Name</label>
            <input className="form-control" type="text" value={name} onChange={this.handleChange} />
          </div>
          <div className="form-group col-sm-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(state => state)(FriendForm);
