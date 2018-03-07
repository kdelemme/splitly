import React, { Component } from "react";

export default class Participants extends Component {
  onChange = event => {
    const { participants } = this.props;

    if (event.target.checked) {
      this.props.onChange([...participants, event.target.value]);
    } else {
      this.props.onChange(participants.filter(p => p !== event.target.value));
    }
  };

  render() {
    const { friends, participants } = this.props;

    if (friends.length === 0) {
      return null;
    }

    return (
      <div className="form-group col-12">
        <legend className="col-form-label pt-0">Participants</legend>
        {friends.map(({ name, id }) => {
          return (
            <div key={id} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`participant${id}`}
                value={id}
                name="participant"
                onChange={this.onChange}
                checked={participants.indexOf(id) > -1}
              />
              <label className="form-check-label" htmlFor={`participant${id}`}>
                {name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
