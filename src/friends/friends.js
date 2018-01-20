import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFriend } from "./actions";

export class Friends extends Component {
  render() {
    const { friends, dispatch } = this.props;
    const dispatchDeleteFriend = friend => dispatch(deleteFriend(friend));

    return (
      <div className="row">
        <h1 className="col-12">Friends</h1>
        <ul className="col-12">
          {friends.map(friend => (
            <li key={friend.id} className="list-group-item d-flex justify-content-between align-items-center">
              {friend.name}
              <button type="buton" className="close" onClick={dispatchDeleteFriend.bind(this, friend)}><span aria-hidden="true">&times;</span></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(Friends);
