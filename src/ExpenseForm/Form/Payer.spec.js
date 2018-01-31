import React from "react";
import { shallow } from "enzyme";
import Payer from "./Payer";

describe("<Payer />", () => {
  it("should display nothing if friends is empty", () => {
    const wrapper = shallow(<Payer friends={[]} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it("should display friends options", () => {
    const wrapper = shallow(<Payer friends={[{ id: 1, name: "Alice" }, { id: 2, name: "John" }]} />);
    expect(wrapper.find("input").length).toBe(2);
  });

  it("should propagate the payer id on selection", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<Payer friends={[{ id: 1, name: "Alice" }]} payer={null} onChange={onChangeSpy} />);

    wrapper.find("input").simulate("change", { target: { value: 1 } });

    expect(onChangeSpy).toHaveBeenCalledWith(1);
  });
});
