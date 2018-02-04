import React from "react";
import { shallow } from "enzyme";
import { ExpenseForm } from ".";

describe("<ExpenseForm />", () => {
  test("should initialize the state with default values", () => {
    const wrapper = shallow(<ExpenseForm friends={[]} onSubmit={() => ({})} />);
    expect(wrapper.state()).toEqual({ reason: "", amount: "", payer: null, participants: [] });
  });

  it("should render with disabled button", () => {
    const wrapper = shallow(<ExpenseForm friends={[]} />);
    expect(wrapper.find("button[disabled=true]").exists()).toBe(true);
  });

  it("should enable submit button if form is valid", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.setState({ amount: 123, reason: "example", payer: 1, participants: [1, 2, 3] });

    expect(wrapper.find("button[disabled=false]").exists()).toBe(true);
  });

  it("should disable submit button if amount is not a valid number", () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.setState({ amount: "12,2", reason: "example", payer: 1, participants: [1, 2, 3] });
    expect(wrapper.find("button[disabled=true]").exists()).toBe(true);

    wrapper.setState({ amount: -100.2, reason: "example", payer: 1, participants: [1, 2, 3] });
    expect(wrapper.find("button[disabled=true]").exists()).toBe(true);
  });
});
