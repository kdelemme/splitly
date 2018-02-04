import { createStore } from "redux";
import reducers from "./reducers";

const preloadedState = {
  friends: [
    { id: "281847ea-fbe3-49d0-be47-f42a4ddfa433", name: "Alice" },
    { id: "52cd275d-c3be-4cab-b0e0-564f52604e52", name: "Bob" }
  ],
  expenses: [
    {
      id: "835a140b-7eb0-4285-b9ba-97168f5e886c",
      amount: 44.0,
      reason: "Cleaning",
      payer: "281847ea-fbe3-49d0-be47-f42a4ddfa433",
      participants: ["281847ea-fbe3-49d0-be47-f42a4ddfa433", "52cd275d-c3be-4cab-b0e0-564f52604e52"]
    }
  ],
  settings: {
    currency: "$"
  }
};

export const store = createStore(reducers, preloadedState);
