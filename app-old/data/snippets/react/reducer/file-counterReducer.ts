const enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "SET",
}

type State = {
  count: number;
};

type Action =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT }
  | { type: CounterActionTypes.RESET }
  | { type: CounterActionTypes.SET; payload: number };

export const initialState: State = { count: 0 };

export const reducer = (state: State, action: Action) => {
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
  increment: (): Action => ({ type: CounterActionTypes.INCREMENT }),
  decrement: (): Action => ({ type: CounterActionTypes.DECREMENT }),
  reset: (): Action => ({ type: CounterActionTypes.RESET }),
  set: (value: number): Action => ({ type: CounterActionTypes.SET, payload: value }),
};
