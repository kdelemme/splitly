import { v4 } from 'uuid';

export const ADD_FRIEND = "ADD_FRIEND";
export const addFriend = friend => ({
  type: ADD_FRIEND,
  id: v4(),
  name: friend.name
});
