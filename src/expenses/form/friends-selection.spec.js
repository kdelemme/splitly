import React from "react";
import { shallow } from "enzyme";
import FriendsSelection from "./friends-selection";

describe("<FriendsSelection />", () => {
  test("should not render anything if no friends", () => {
    const wrapper = shallow(<FriendsSelection friends={[]} />);
    expect(wrapper.find("select")).toHaveLength(0);
  });

  test("should render a select with the props friends", () => {
    const friends = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
    const selected = [];
    const props = { friends, selected };
    const wrapper = shallow(<FriendsSelection {...props} />);

    expect(wrapper.find("select > option")).toHaveLength(2);
    expect(wrapper.find("select > option[value=2]").text()).toBe("Alice");
  });
});
