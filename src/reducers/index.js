import { combineReducers } from "redux";

import { ADD_EXPENSE } from "../ExpenseForm/actions";
import { ADD_FRIEND } from "../FriendForm/actions";
import { DELETE_FRIEND } from "../Friends/actions";
import { SAVE_SETTINGS } from "../Settings/actions";

const friends = (state = [], action) => {
  if (action.type === ADD_FRIEND) {
    return [...state, { id: action.id, name: action.name }];
  } else if (action.type === DELETE_FRIEND) {
    return state.filter(friend => friend.id != action.id);
  } else {
    return state;
  }
};

const removeFriendFromParticipants = (expense, id) => {
  return Object.assign({}, expense, { participants: expense.participants.filter(p => p != id) });
};

const expenses = (state = [], action) => {
  if (action.type === ADD_EXPENSE) {
    return [...state, action.payload];
  } else if (action.type === DELETE_FRIEND) {
    return state
      .filter(expense => expense.payer != action.id)
      .map(expense => removeFriendFromParticipants(expense, action.id));
  } else {
    return state;
  }
};

const settings = (state = {}, action) => {
  if (action.type === SAVE_SETTINGS) {
    return action.settings;
  } else {
    return state;
  }
};

const reducers = combineReducers({
  friends,
  expenses,
  settings
});

export default reducers;
