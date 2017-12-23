import React, { Component } from "react";

class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  renderFriend(friend) {
    return (
      <li key={friend.id}>
        {friend.name} <button onClick={() => this.props.onDelete(friend)}>delete</button>
      </li>
    );
  }

  render() {
    return <ul>{this.props.friends.map(friend => this.renderFriend(friend))}</ul>;
  }
}

export default FriendList;
