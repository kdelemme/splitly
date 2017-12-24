import { ADD_FRIEND, DELETE_FRIEND } from "./actions";

const reducers = (state = [], action) => {
  if (action.type === ADD_FRIEND) {
    return [...state, { id: action.id, name: action.name }];
  } else if (action.type === DELETE_FRIEND) {
    return state.filter(friend => friend.id != action.id);
  } else {
    return state;
  }
};

export default reducers;
