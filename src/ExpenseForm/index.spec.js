import React from "react";
import { shallow } from "enzyme";
import { ExpenseForm } from ".";

describe("<ExpenseForm />", () => {
  test("should initialize the state with default values", () => {
    const wrapper = shallow(<ExpenseForm friends={[]} onSubmit={() => ({})} />);
    expect(wrapper.state()).toEqual({ reason: "", amount: "", payer: null, participants: [] });
  });
});