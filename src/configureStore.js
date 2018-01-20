import { createStore } from "redux";
import reducers from "./reducers";

const preloadedState = {
  friends: [
    { id: "281847ea-fbe3-49d0-be47-f42a4ddfa433", name: "Alice" },
    { id: "52cd275d-c3be-4cab-b0e0-564f52604e52", name: "Bob" },
  ],
};

export const store = createStore(reducers, preloadedState);