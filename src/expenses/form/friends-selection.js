import React, { Component } from "react";

class FriendsSelection extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { multiple } = this.props;
    const selectedFriends = Array.from(event.target.selectedOptions).map(option => ({
      id: option.value,
      name: option.text
    }));

    this.props.onChange(multiple ? selectedFriends : selectedFriends[0]);
  }

  render() {
    const { friends, label, multiple } = this.props;
    if (friends.length === 0) {
      return null;
    }

    return (
      <div class="form-row">
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
