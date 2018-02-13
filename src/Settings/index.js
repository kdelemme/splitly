import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSettings } from "./actions";

export class Settings extends Component {
  state = { currency: this.props.settings.currency, pristine: true, currencies: [] };

  handleChange = event => {
    const currency = this.state.currencies.find(c => c.name === event.target.selectedOptions[0].value);
    this.setState({ currency, pristine: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatchSaveSettings({ currency: this.state.currency });
    this.resetState();
  };

  resetState = () => {
    this.setState({ pristine: true });
  };

  componentDidMount = () => {
    this.setState({
      currencies: [
        { name: "USD", symbol: "$" },
        { name: "EUR", symbol: "€" },
        { name: "AUD", symbol: "A$" },
        { name: "GBP", symbol: "£" }
      ]
    });
  };

  render() {
    const { currency, pristine, currencies } = this.state;

    return (
      <div className="row pt-5">
        <div className="col-12 col-md-4">
          <h1>Settings</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group col-10">
              <label className="my-1 mr-2" htmlFor="currency">
                Currency
              </label>
              <select className="custom-select" id="currency" onChange={this.handleChange} value={currency.name}>
                {currencies.map(c => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary ml-3" disabled={pristine}>
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ settings: state.settings });
const mapDispatchToProps = dispatch => ({
  dispatchSaveSettings: settings => dispatch(saveSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
