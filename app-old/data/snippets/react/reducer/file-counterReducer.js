const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};

export const initialState = { count: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionTypes.RESET:
      return { ...state, count: 0 };
    case CounterActionTypes.SET:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const actions = {
  increment: () => ({ type: CounterActionTypes.INCREMENT }),
  decrement: () => ({ type: CounterActionTypes.DECREMENT }),
  reset: () => ({ type: CounterActionTypes.RESET }),
  set: (value) => ({ type: CounterActionTypes.SET, payload: value }),
};
