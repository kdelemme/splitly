import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFriend } from "./actions";

export class Friends extends Component {
  render() {
    const { friends, dispatch } = this.props;
    const dispatchDeleteFriend = friend => dispatch(deleteFriend(friend));

    return (
      <div className="row">
        <h1>Friends</h1>
        <ul>
          {friends.map(friend => (
            <li key={friend.id}>
              {friend.name}{" "}
              <button className="btn btn-xs btn-danger" onClick={dispatchDeleteFriend.bind(this, friend)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Friends);
