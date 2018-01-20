export const DELETE_FRIEND = "DELETE_FRIEND";
export const deleteFriend = friend => ({
  type: DELETE_FRIEND,
  id: friend.id
});
