import { combineReducers } from "redux";

import friends from "./friends/reducers";

const reducers = combineReducers({
  friends
});

export default reducers;
