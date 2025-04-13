export const actions = {
  increment: () => ({ type: CounterActionTypes.INCREMENT }),
  decrement: () => ({ type: CounterActionTypes.DECREMENT }),
  reset: () => ({ type: CounterActionTypes.RESET }),
  set: (value) => ({ type: CounterActionTypes.SET, payload: value }),
};
