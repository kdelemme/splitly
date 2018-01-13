import { deleteFriend, DELETE_FRIEND } from "./actions";

describe("Actions", () => {
  test("deleteFriend action should take the id from the arg", () => {
    expect(deleteFriend({ id: 1 })).toEqual({ id: 1, type: DELETE_FRIEND });
  });
});
