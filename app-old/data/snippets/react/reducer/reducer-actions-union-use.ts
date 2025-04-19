const reducer = (state: State, action: CounterAction) => {
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
