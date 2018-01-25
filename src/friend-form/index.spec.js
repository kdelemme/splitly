import React from "react";
import { shallow } from "enzyme";
import { FriendForm } from ".";

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
    const dispatchSpy = jest.fn();
    const wrapper = shallow(<FriendForm dispatchAddFriend={dispatchSpy} />);
    wrapper.find('input[type="text"]').simulate("change", CHANGE_EVENT("John"));
    wrapper.find("form").simulate("submit", EMPTY_EVENT);
    expect(wrapper.state("name")).toBe("");
  });

  test("should pass the name in the onSubmit callback", () => {
    const dispatchSpy = jest.fn();
    const wrapper = shallow(<FriendForm dispatchAddFriend={dispatchSpy} />);
    wrapper.find('input[type="text"]').simulate("change", CHANGE_EVENT("John"));
    wrapper.find("form").simulate("submit", EMPTY_EVENT);

    expect(dispatchSpy).toHaveBeenCalledWith("John");
  });
});
