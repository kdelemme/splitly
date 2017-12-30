import React, { Component } from "react";

class FriendsSelection extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(
      Array.from(event.target.selectedOptions).map(option => ({
        id: option.value,
        name: option.text
      }))
    );
  }

  render() {
    const { friends, label } = this.props;
    if (friends.length === 0) {
      return null;
    }

    return (
      <div>
        <label>
          {label}
          <select multiple onChange={this.onChange}>
            {friends.map(friend => (
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default FriendsSelection;
