import React, { Component } from "react";

class FriendsSelection extends Component {
  onChange = event => {
    const { multiple, onChange } = this.props;
    const selectedFriends = Array.from(event.target.selectedOptions).map(option => ({
      id: option.value,
      name: option.text
    }));

    onChange(multiple ? selectedFriends : selectedFriends[0]);
  };

  render() {
    const { friends, label, multiple } = this.props;
    if (friends.length === 0) {
      return null;
    }

    return (
      <div className="form-row">
        <div className="form-group col-sm-6">
          <label>{label}</label>
          <select className="form-control" multiple={multiple} onChange={this.onChange}>
            {friends.map(friend => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FriendsSelection;
