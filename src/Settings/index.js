import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSettings } from "./actions";

const mapStateToProps = state => ({ settings: state.settings });
const mapDispatchToProps = dispatch => ({
  dispatchSaveSettings: settings => dispatch(saveSettings(settings))
});

export class Settings extends Component {
  state = { currency: this.props.settings.currency, pristine: true };

  handleChange = event => {
    this.setState({ currency: event.target.selectedOptions[0].value, pristine: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatchSaveSettings({ currency: this.state.currency });
    this.resetState();
  };

  resetState = () => {
    this.setState({ pristine: true });
  };

  render() {
    const { currency, pristine } = this.state;
    const { currencies } = this.props;

    return (
      <div className="row">
        <h1 className="col-12">Settings</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group col-10">
            <label className="my-1 mr-2" htmlFor="currency">
              Currency
            </label>
            <select className="custom-select" id="currency" onChange={this.handleChange} value={currency}>
              {currencies.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary ml-3" disabled={pristine}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
