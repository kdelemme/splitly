import { combineReducers } from "redux";

import friends from "./friends/reducers";
import expenses from "./expense-form/reducers";

const reducers = combineReducers({
  friends,
  expenses
});

export default reducers;
