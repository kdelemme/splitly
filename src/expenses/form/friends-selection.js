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
    const { friends, label, multiple, selected } = this.props;
    if (friends.length === 0) {
      return null;
    }
    const selectedValues = multiple ? selected.map(s => s.id) : selected.id;

    return (
      <div className="form-group">
        <label>{label}</label>
        <select className="form-control" multiple={multiple} onChange={this.onChange} value={selectedValues}>
          {friends.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FriendsSelection;
