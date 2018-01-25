import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "./actions";

const mapDispatchToProps = (dispatch) => ({
  dispatchAddFriend: (name) => dispatch(addFriend({ name })),
});

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
    event.preventDefault();
    this.props.dispatchAddFriend(this.state.name)
    this.setState({ name: "" });
  }

  render() {
    const { name } = this.state;

    return (
      <div className="row">
        <h1 className="col-12">Add friend</h1>
        <form className="form-inline col-12" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" value={name} onChange={this.handleChange} placeholder="Name" />
          <button type="submit" className="btn btn-primary ml-2">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(FriendForm);
