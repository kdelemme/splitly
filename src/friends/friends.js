import React, { Component } from "react";
import { connect } from "react-redux";
import { Friend } from "./friend";
import { deleteFriend } from "./actions";

const mapStateToProps = (state) => ({ friends: state.friends });
const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteFriend: (id) => () => dispatch(deleteFriend(id))
});

export class Friends extends Component {
  render() {
    const { friends, dispatchDeleteFriend } = this.props;

    return (
      <div className="row">
        <h1 className="col-12">Friends</h1>
        <ul className="col-12">
          {friends.map(friend => <Friend key={friend.id} {...friend} onDelete={dispatchDeleteFriend} />)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
