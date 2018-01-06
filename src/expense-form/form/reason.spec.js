import React from "react";
import { shallow } from "enzyme";
import Reason from "./reason";

describe("<Reason />", () => {
  test("should propagate the new reason", () => {
    const onChangeSpy = jest.fn();
    const UPDATED_REASON = "A new reason";
    const wrapper = shallow(<Reason reason="Some reason" onChange={onChangeSpy} />);

    wrapper.find("input").simulate("change", { target: { value: UPDATED_REASON } });

    expect(onChangeSpy).toHaveBeenCalledWith(UPDATED_REASON);
  });
});
