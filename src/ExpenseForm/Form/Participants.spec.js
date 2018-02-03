import React from "react";
import { shallow } from "enzyme";
import Participants from "./Participants";

describe("<Participants />", () => {
  it("should display nothing if friends is empty", () => {
    const wrapper = shallow(<Participants friends={[]} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it("should display friends options", () => {
    const wrapper = shallow(<Participants participants={[]} friends={someFriends} />);
    expect(wrapper.find("input").length).toBe(2);
  });

  it("should propage selected participants to the onChange callback", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<Participants participants={[]} friends={someFriends} onChange={onChangeSpy} />);

    wrapper
      .find("input[type='checkbox']")
      .first()
      .simulate("change", { target: { checked: true, value: 1 } });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenLastCalledWith([1]);
  });
});

const someFriends = [{ id: 1, name: "Alice" }, { id: 2, name: "John" }];
