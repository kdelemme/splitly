import React from "react";
import { shallow } from "enzyme";
import Participants from "./Participants";

describe("<Participants />", () => {
  it("should display nothing if friends is empty", () => {
    const wrapper = shallow(<Participants friends={[]} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it("should display friends options", () => {
    const wrapper = shallow(
      <Participants participants={[]} friends={[{ id: 1, name: "Alice" }, { id: 2, name: "John" }]} />
    );
    expect(wrapper.find("input").length).toBe(2);
  });
});
