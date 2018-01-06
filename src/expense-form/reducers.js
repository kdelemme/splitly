import { ADD_EXPENSE } from "./actions";

const reducers = (state = [], action) => {
  if (action.type === ADD_EXPENSE) {
    return [...state, action.payload];
  } else {
    return state;
  }
};

export default reducers;
