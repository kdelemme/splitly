import React, { Component } from "react";

import FriendList from "./friend-list";
import FriendForm from "./friend-form";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onSubmit(friend) {
    this.setState(prevState => ({ friends: [...prevState.friends, friend] }));
  }

  onDelete(friend) {
    this.setState(prevState => ({ friends: prevState.friends.filter(f => f.id != friend.id) }));
  }

  render() {
    const friends = this.state.friends;
    return (
      <div>
        <h1>Friends</h1>
        <FriendForm onSubmit={this.onSubmit} />
        <FriendList friends={friends} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default Friends;
