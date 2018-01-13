import { addFriend, ADD_FRIEND } from "./actions";

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
});
