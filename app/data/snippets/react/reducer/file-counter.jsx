import { initialState, actions, reducer } from "../reducers/counterReducer";
import { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch(actions.increment())}>Increment</button>

      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>

      <button onClick={() => dispatch(actions.reset())}>Reset</button>

      <button onClick={() => dispatch(actions.set(10))}>Set counter to 10</button>
    </div>
  );
};

export default Counter;
