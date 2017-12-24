import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriend, deleteFriend } from "./actions";

import FriendList from "./friend-list";
import FriendForm from "./friend-form";

class Friends extends Component {
  render() {
    const { friends, dispatch } = this.props;
    const dispatchAddFriend = friend => dispatch(addFriend(friend));
    const dispatchDeleteFriend = friend => dispatch(deleteFriend(friend));

    return (
      <div>
        <h1>Friends</h1>
        <FriendForm onSubmit={dispatchAddFriend} />
        <FriendList friends={friends} onDelete={dispatchDeleteFriend} />
      </div>
    );
  }
}

export default connect(state => state)(Friends);
