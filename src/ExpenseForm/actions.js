import { v4 } from 'uuid';

export const ADD_EXPENSE = "ADD_EXPENSE";
export const addExpense = expense => ({
  type: ADD_EXPENSE,
  payload: Object.assign({ id: v4() }, expense),
});
