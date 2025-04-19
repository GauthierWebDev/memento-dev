export const actions = {
  increment: (): CounterAction => ({ type: CounterActionTypes.INCREMENT }),
  decrement: (): CounterAction => ({ type: CounterActionTypes.DECREMENT }),
  reset: (): CounterAction => ({ type: CounterActionTypes.RESET }),
  set: (value: number): CounterAction => ({ type: CounterActionTypes.SET, payload: value }),
};
