type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET" | "SET";
  payload?: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET":
      return { ...state, count: action.payload! };
    default:
      return state;
  }
};
