import { combineReducers } from "redux";

import { ADD_EXPENSE } from "../expense-form/actions";
import { ADD_FRIEND } from "../friend-form/actions";
import { DELETE_FRIEND } from "../friends/actions";

const friends = (state = [], action) => {
  if (action.type === ADD_FRIEND) {
    return [...state, { id: action.id, name: action.name }];
  } else if (action.type === DELETE_FRIEND) {
    return state.filter(friend => friend.id != action.id);
  } else {
    return state;
  }
};

const expenses = (state = [], action) => {
  if (action.type === ADD_EXPENSE) {
    return [...state, action.payload];
  } else if (action.type === DELETE_FRIEND) {
    return state.filter(expense => expense.paidBy.id != action.id); //TODO filter paidFor array too
  } else {
    return state;
  }
};

const reducers = combineReducers({
  friends,
  expenses
});

export default reducers;
