import reducers from "./";
import { deleteFriend } from "../Friends/actions";
import { addFriend } from "../FriendForm/actions";

describe("reducers", () => {
  it("shoud add friends", () => {
    const state = { friends: [], expenses: [] };
    const newState = reducers(state, addFriend({ name: "Bob" }));
    expect(newState.friends).toHaveLength(1);
    expect(newState.friends).toMatchObject([{ name: "Bob" }]);
  });

  it("shoud delete friend from friends list", () => {
    const state = { friends: [aFriend(1, "Bob"), aFriend(2, "Paul")], expenses: [] };
    const newState = reducers(state, deleteFriend(1));
    expect(newState.friends).toHaveLength(1);
  });

  it("shoud delete expenses paid by deleted friend", () => {
    const friends = [aFriend(1, "Bob"), aFriend(2, "Paul")];
    const state = {
      friends,
      expenses: [anExpense(1120, "rent", aFriend(1, "Bob"), friends)]
    };
    const newState = reducers(state, deleteFriend(1));
    expect(newState.friends).toHaveLength(1);
    expect(newState.expenses).toHaveLength(0);
  });

  it("shoud delete friends from participants list in expenses", () => {
    const friends = [aFriend(1, "Bob"), aFriend(2, "Paul")];
    const state = {
      friends,
      expenses: [anExpense(1120, "rent", aFriend(1, "Bob").id, friends.map(f => f.id))]
    };
    const newState = reducers(state, deleteFriend(2));
    expect(newState.friends).toHaveLength(1);
    expect(newState.expenses).toHaveLength(1);
    expect(newState.expenses).toMatchObject([{ participants: [1] }]);
  });
});

function aFriend(id, name) {
  return { id, name };
}

function anExpense(amount, reason, payer, participants) {
  return { amount, reason, payer, participants };
}
