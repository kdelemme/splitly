export type UUID: string;

export type ExpenseType = {
  id: UUID,
  reason: string,
  payer: string,
  amount: number,
  participants: Array<string>
};

export type CurrencyType = {
  name: string,
  symbol: string
};

export type FriendType = {
  id: UUID,
  name: string
};
