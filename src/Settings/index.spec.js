import React from "react";
import { shallow } from "enzyme";
import { Settings } from ".";

describe("<Settings />", () => {
  describe("Currency", () => {
    const AVAILABLE_CURRENCIES = ["USD", "EUR", "GBP", "AUD"];
    const SETTINGS = { currency: "EUR" };
    const aChangeEvent = currency => ({
      target: {
        selectedOptions: [{ value: currency }]
      }
    });
    const aSubmitEvent = () => ({ preventDefault: jest.fn() });

    it("should list available currencies", () => {
      const wrapper = shallow(<Settings settings={SETTINGS} currencies={AVAILABLE_CURRENCIES} />);
      expect(wrapper.find("select#currency > option").length).toBe(4);
    });

    it("should dispatch a save action on submit", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <Settings settings={SETTINGS} currencies={AVAILABLE_CURRENCIES} dispatchSaveSettings={spy} />
      );

      wrapper.find("select#currency").simulate("change", aChangeEvent("USD"));
      wrapper.find("form").simulate("submit", aSubmitEvent());

      expect(spy).toHaveBeenCalledWith({ currency: "USD" });
    });
  });
});
