export const ADD_FRIEND = "ADD_FRIEND";

export const addFriend = friend => {
  return {
    type: ADD_FRIEND,
    id: Math.ceil(Math.random() * 100000),
    name: friend.name
  };
};
