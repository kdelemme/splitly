import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriend, deleteFriend } from "./actions";

import FriendList from "./friend-list";
import FriendForm from "./friend-form";

class Friends extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSubmit(friend) {
    this.props.dispatch(addFriend(friend));
  }

  onDelete(friend) {
    this.props.dispatch(deleteFriend(friend));
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h1>Friends</h1>
        <FriendForm onSubmit={this.onSubmit} />
        <FriendList friends={friends} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default connect(state => state)(Friends);
