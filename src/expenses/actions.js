export const ADD_EXPENSE = "ADD_EXPENSE";

export const addExpense = expense => {
  const payload = Object.assign({ id: Math.ceil(Math.random() * 100000) }, expense);
  return {
    type: ADD_EXPENSE,
    payload
  };
};
