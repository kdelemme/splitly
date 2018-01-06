export const DELETE_FRIEND = "DELETE_FRIEND";

export const deleteFriend = friend => {
  return {
    type: DELETE_FRIEND,
    id: friend.id
  };
};
