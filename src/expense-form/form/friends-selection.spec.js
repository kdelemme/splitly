import React from "react";
import { shallow } from "enzyme";
import FriendsSelection from "./friends-selection";

describe("<FriendsSelection />", () => {
  const FRIENDS = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
  const SELECT_FRIEND_EVENT = friend => {
    return {
      target: {
        selectedOptions: [
          {
            value: friend.id,
            text: friend.name
          }
        ]
      }
    };
  };

  test("should not render anything if no friends", () => {
    const wrapper = shallow(<FriendsSelection friends={[]} />);
    expect(wrapper.find("select")).toHaveLength(0);
  });

  test("should render a select with the props friends", () => {
    const wrapper = shallow(<FriendsSelection friends={FRIENDS} />);

    expect(wrapper.find("select > option")).toHaveLength(2);
    expect(wrapper.find("select > option[value=2]").text()).toBe("Alice");
  });

  test("should call onChange with a friend object when multiple is false", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<FriendsSelection multiple={false} friends={FRIENDS} onChange={onChangeSpy} />);

    wrapper.find("select").simulate("change", SELECT_FRIEND_EVENT(FRIENDS[0]));

    expect(onChangeSpy).toHaveBeenCalledWith(FRIENDS[0]);
  });

  test("should call onChange with an array of friends when multiple is true", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<FriendsSelection multiple={true} friends={FRIENDS} onChange={onChangeSpy} />);

    wrapper.find("select").simulate("change", SELECT_FRIEND_EVENT(FRIENDS[0]));

    expect(onChangeSpy).toHaveBeenCalledWith([FRIENDS[0]]);
  });
});
