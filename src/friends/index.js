import React, { Component } from "react";
import { connect } from "react-redux";
import { Friend } from "./friend";
import { deleteFriend } from "./actions";

const mapStateToProps = state => ({ friends: state.friends });
const mapDispatchToProps = dispatch => ({
  dispatchDeleteFriend: id => () => dispatch(deleteFriend(id))
});

export class Friends extends Component {
  renderFriends = () => {
    const { friends, dispatchDeleteFriend } = this.props;
    if (!friends || friends.length === 0) {
      return <p className="col-12 lead">Add some friends...</p>;
    }

    return (
      <ul className="col-12">
        {friends.map(friend => <Friend key={friend.id} {...friend} onDelete={dispatchDeleteFriend} />)}
      </ul>
    );
  };

  render() {
    return (
      <div className="row">
        <h1 className="col-12">Friends</h1>
        {this.renderFriends()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
