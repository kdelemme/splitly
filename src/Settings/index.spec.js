import React from "react";
import { shallow } from "enzyme";
import { Settings } from ".";

describe("<Settings />", () => {
  const availableCurrencies = [
    { name: "USD", symbol: "$" },
    { name: "EUR", symbol: "€" },
    { name: "AUD", symbol: "A$" },
    { name: "GBP", symbol: "£" }
  ];
  const settings = { currency: { name: "EUR", symbol: "€" } };
  const aChangeEvent = currency => ({
    target: {
      selectedOptions: [{ value: currency }]
    }
  });
  const aSubmitEvent = () => ({ preventDefault: jest.fn() });

  describe("Currency", () => {
    it("should list available currencies", () => {
      const wrapper = shallow(<Settings settings={settings} currencies={availableCurrencies} />);
      expect(wrapper.find("select#currency > option").length).toBe(4);
    });

    it("should dispatch a save action on submit", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <Settings settings={settings} currencies={availableCurrencies} dispatchSaveSettings={spy} />
      );

      wrapper.find("select#currency").simulate("change", aChangeEvent("USD"));
      wrapper.find("form").simulate("submit", aSubmitEvent());

      expect(spy).toHaveBeenCalledWith({ currency: { name: "USD", symbol: "$" } });
    });
  });

  it("should initiate form with disabled submit button", () => {
    const wrapper = shallow(<Settings settings={settings} currencies={availableCurrencies} />);
    expect(wrapper.find("button[disabled=true]").exists()).toBe(true);
  });

  it("should enable submit button when form has changed", () => {
    const wrapper = shallow(<Settings settings={settings} currencies={availableCurrencies} />);

    wrapper.find("select#currency").simulate("change", aChangeEvent("USD"));

    expect(wrapper.find("button[disabled=false]").exists()).toBe(true);
  });
});
