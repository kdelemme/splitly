import React from "react";
import { shallow } from "enzyme";
import Balance from "./Balance";

describe("<Balance />", () => {
  const props = {
    friends: [{ id: 100, name: "Alice" }, { id: 200, name: "Bob" }, { id: 300, name: "John" }],
    expenses: [
      {
        id: 1,
        amount: 101.0,
        reason: "An expense",
        payer: 100,
        participants: [100, 200]
      },
      {
        id: 2,
        amount: 60.0,
        reason: "An expense",
        payer: 300,
        participants: [100, 200, 300]
      },
      {
        id: 3,
        amount: 10.0,
        reason: "An expense",
        payer: 300,
        participants: [200]
      }
    ]
  };

  it("should display positive balances owed by every friends", () => {
    const friend = { id: 100, name: "Alice" };
    const wrapper = shallow(<Balance {...props} friend={friend} />);

    expect(wrapper.find("li").length).toEqual(1);
    expect(wrapper.find("li").text()).toEqual("Alice is owed 50.5 by Bob");
  });

  it("should compute balances owed by each friend from all expenses", () => {
    const friend = { id: 300, name: "John" };
    const wrapper = shallow(<Balance {...props} friend={friend} />);

    expect(wrapper.find("li").length).toEqual(2);
    expect(wrapper.find("li[data-attr-id=100]").text()).toEqual("John is owed 20 by Alice");
    expect(wrapper.find("li[data-attr-id=200]").text()).toEqual("John is owed 30 by Bob");
  });
});
