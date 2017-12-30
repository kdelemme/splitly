import { addFriend, deleteFriends, ADD_FRIEND, DELETE_FRIEND, deleteFriend } from "./actions";

describe("Actions", () => {
  test("addFriends action should have an id", () => {
    expect(addFriend({}).id).toBeDefined();
  });

  test("addFriends action should take the name from the arg", () => {
    expect(addFriend({ name: "john" }).name).toBe("john");
  });

  test("addFriends action should have the correct type", () => {
    expect(addFriend({ name: "john" }).type).toBe(ADD_FRIEND);
  });

  test("deleteFriend action should take the id from the arg", () => {
    expect(deleteFriend({ id: 1 })).toEqual({ id: 1, type: DELETE_FRIEND });
  });
});
