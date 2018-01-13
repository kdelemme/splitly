import React from "react";
import { shallow } from "enzyme";
import { Friends } from "./friends";

describe("<Friends />", () => {
  test("should render two <li> elements", () => {
    const friends = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
    const wrapper = shallow(<Friends friends={friends} />);
    expect(wrapper.find("li").length).toBe(2);
  });

  test("should render no element if friends is empty", () => {
    const wrapper = shallow(<Friends friends={[]} />);
    expect(wrapper.find("li").length).toBe(0);
  });
});
