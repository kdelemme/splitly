export type UUID: string;

export type Expense = {
  id: UUID,
  reason: string,
  payer: string,
  amount: number,
  participants: Array<string>
};

export type Currency = {
  name: string,
  symbol: string
};

export type Friend = {
  id: UUID,
  name: string
};
