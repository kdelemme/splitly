import React from "react";
import { shallow } from "enzyme";
import Amount from "./amount";

describe("<Amount />", () => {
  test("should propagate the new amount", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<Amount amount={1200} onChange={onChangeSpy} />);

    wrapper.find("input").simulate("change", { target: { value: 2300 } });

    expect(onChangeSpy).toHaveBeenCalledWith(2300);
  });
});
