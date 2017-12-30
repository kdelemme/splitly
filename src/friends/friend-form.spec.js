import React from "react";
import { shallow } from "enzyme";
import FriendForm from "./friend-form";

describe("<FriendForm />", () => {
  const EMPTY_FUNCTION = () => {};
  const EMPTY_EVENT = { preventDefault: EMPTY_FUNCTION };
  const CHANGE_EVENT = value => ({ target: { value } });

  test("should initiate an empty name", () => {
    const wrapper = shallow(<FriendForm />);
    expect(wrapper.state("name")).toBe("");
  });

  test("should reflect name change on the state", () => {
    const wrapper = shallow(<FriendForm />);
    wrapper.find('input[type="text"]').simulate("change", CHANGE_EVENT("a new name"));
    expect(wrapper.state("name")).toBe("a new name");
  });

  test("should reset the name state on submit", () => {
    const wrapper = shallow(<FriendForm onSubmit={EMPTY_FUNCTION} />);
    wrapper.find('input[type="text"]').simulate("change", CHANGE_EVENT("John"));
    wrapper.find("form").simulate("submit", EMPTY_EVENT);
    expect(wrapper.state("name")).toBe("");
  });

  test("should pass the name in the onSubmit callback", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<FriendForm onSubmit={onSubmitSpy} />);
    wrapper.find('input[type="text"]').simulate("change", CHANGE_EVENT("John"));
    wrapper.find("form").simulate("submit", EMPTY_EVENT);

    expect(onSubmitSpy).toHaveBeenCalledWith({ name: "John" });
  });
});
