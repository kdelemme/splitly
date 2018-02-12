import React from "react";
import { shallow } from "enzyme";
import { Balances } from ".";

describe("<Balances />", () => {
  const props = {
    friends: [{ id: 100, name: "Alice" }, { id: 200, name: "Bob" }],
    expenses: [
      {
        id: 1,
        amount: 100.0,
        reason: "An expense",
        payer: 100,
        participants: [100, 200]
      }
    ]
  };

  it("should compute balances for each friend", () => {
    const wrapper = shallow(<Balances {...props} />);
    expect(wrapper.find("li").length).toBe(2);
  });
});
