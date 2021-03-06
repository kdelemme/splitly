import React from "react";
import { shallow } from "enzyme";

import { FriendsContainer } from "./FriendsContainer";
import Friends from "../Friends";
import FriendForm from "../FriendForm";

import { ExpensesContainer } from "./ExpensesContainer";
import Expenses from "../Expenses";
import ExpenseForm from "../ExpenseForm";

describe("<FriendsContainer />", () => {
  it("should render FriendForm and Friends", () => {
    const wrapper = shallow(<FriendsContainer />);
    expect(wrapper.find(Friends).exists()).toBe(true);
    expect(wrapper.find(FriendForm).exists()).toBe(true);
  });
});

describe("<ExpensesContainer />", () => {
  it("should render ExpenseForm and Expenses", () => {
    const wrapper = shallow(<ExpensesContainer />);
    expect(wrapper.find(Expenses).exists()).toBe(true);
    expect(wrapper.find(ExpenseForm).exists()).toBe(true);
  });
});
