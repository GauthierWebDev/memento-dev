
export type CounterAction =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT }
  | { type: CounterActionTypes.RESET }
  | { type: CounterActionTypes.SET; payload: number };