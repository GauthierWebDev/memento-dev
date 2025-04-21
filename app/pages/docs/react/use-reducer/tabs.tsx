import { Snippet } from "@/components/Snippet";

const reactReducerExampleSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE_1":
      return { ...state /* Nouvel état */ };
    case "TYPE_2":
      return { ...state /* Nouvel état */ };
    default:
      return state;
  }
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TYPE_1":
      return { ...state /* Nouvel état */ };
    case "TYPE_2":
      return { ...state /* Nouvel état */ };
    default:
      return state;
  }
};`,
	},
];

const reactReducerWhySpreadOperatorSnippets = [
	{
		name: "Retour sans déversement de l'état",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `const initialState = { count: 0, message: "Hello" };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};`,
	},
];

const reactUseReducerImportSnippets = [
	{
		name: "Importation de useReducer",
		codeLanguage: "jsx",
		code: `import { useReducer } from "react";`,
	},
];

const reactReducerInitialStateSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		code: "const initialState = { count: 0 };",
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		code: `type State = {
  count: number;
};
const initialState: State = { count: 0 };`,
	},
];

const reactCounterReducerSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `type State = {
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
};`,
	},
];

const reactUseReducerUsageSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		code: "const [state, dispatch] = useReducer(reducer, initialState);",
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		code: "const [state, dispatch] = useReducer<State, Action>(reducer, initialState);",
	},
];

const reactDispatchIncrementSnippets = [
	{
		name: "Exemple d'utilisation de dispatch",
		codeLanguage: "jsx",
		code: `dispatch({ type: "INCREMENT" });`,
	},
];

const reactActionsConstantsSnippets = [
	{
		name: "Création et exportation de constantes d'actions",
		codeLanguage: "jsx",
		code: `export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET = "SET";`,
	},
];

const reactActionsEnumSnippets = [
	{
		name: "JavaScript",
		codeLanguage: "javascript",
		code: `export const CounterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};`,
	},
	{
		name: "TypeScript",
		codeLanguage: "typescript",
		code: `export const enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "SET",
};`,
	},
];

const reactActionsUnionSnippets = [
	{
		name: "Union de types d'actions",
		codeLanguage: "typescript",
		code: `export type CounterAction =
  | { type: CounterActionTypes.INCREMENT }
  | { type: CounterActionTypes.DECREMENT }
  | { type: CounterActionTypes.RESET }
  | { type: CounterActionTypes.SET; payload: number };`,
	},
];

const reactActionsUnionUsageSnippets = [
	{
		name: "Utilisation de l'union de types d'actions",
		codeLanguage: "typescript",
		code: `const reducer = (state: State, action: CounterAction) => {
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
};`,
	},
];

const reactActionCreatorSnippets = [
	{
		name: "JavaScript",
		codeLanguage: "javascript",
		code: `export const actions = {
  increment: () => ({ type: CounterActionTypes.INCREMENT }),
  decrement: () => ({ type: CounterActionTypes.DECREMENT }),
  reset: () => ({ type: CounterActionTypes.RESET }),
  set: (value) => ({ type: CounterActionTypes.SET, payload: value }),
};`,
	},
	{
		name: "TypeScript",
		codeLanguage: "typescript",
		code: `export const actions = {
  increment: (): CounterAction => ({ type: CounterActionTypes.INCREMENT }),
  decrement: (): CounterAction => ({ type: CounterActionTypes.DECREMENT }),
  reset: (): CounterAction => ({ type: CounterActionTypes.RESET }),
  set: (value: number): CounterAction => ({ type: CounterActionTypes.SET, payload: value }),
};`,
	},
];

const reactDispatchActionCreatorSnippets = [
	{
		name: "Utilisation de l'action créateur avec dispatch",
		codeLanguage: "javascript",
		code: `dispatch(actions.increment());
dispatch(actions.set(10));`,
	},
];

const reactFileCounterReducerSnippets = [
	{
		name: "app/reducers/counterReducer.js",
		codeLanguage: "javascript",
		code: `const CounterActionTypes = {
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
};`,
	},
	{
		name: "app/reducers/counterReducer.ts",
		codeLanguage: "typescript",
		code: `const enum CounterActionTypes {
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
};`,
	},
];

const reactFileCounterComponentSnippets = [
	{
		name: "app/components/Counter.jsx",
		codeLanguage: "jsx",
		code: `import { initialState, actions, reducer } from "../reducers/counterReducer";
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

export default Counter;`,
	},
	{
		name: "app/components/Counter.tsx",
		codeLanguage: "tsx",
		code: `import { initialState, actions, reducer } from "../reducers/counterReducer";
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

export default Counter;`,
	},
];

export default {
	reactReducerExample: () => <Snippet snippets={reactReducerExampleSnippets} />,
	reactReducerWhySpreadOperator: () => (
		<Snippet snippets={reactReducerWhySpreadOperatorSnippets} />
	),
	reactUseReducerImport: () => (
		<Snippet snippets={reactUseReducerImportSnippets} />
	),
	reactReducerInitialState: () => (
		<Snippet snippets={reactReducerInitialStateSnippets} />
	),
	reactCounterReducer: () => <Snippet snippets={reactCounterReducerSnippets} />,
	reactUseReducerUsage: () => (
		<Snippet snippets={reactUseReducerUsageSnippets} />
	),
	reactDispatchIncrement: () => (
		<Snippet snippets={reactDispatchIncrementSnippets} />
	),
	reactActionsConstants: () => (
		<Snippet snippets={reactActionsConstantsSnippets} />
	),
	reactActionsEnum: () => <Snippet snippets={reactActionsEnumSnippets} />,
	reactActionsUnion: () => <Snippet snippets={reactActionsUnionSnippets} />,
	reactActionsUnionUsage: () => (
		<Snippet snippets={reactActionsUnionUsageSnippets} />
	),
	reactActionCreator: () => <Snippet snippets={reactActionCreatorSnippets} />,
	reactDispatchActionCreator: () => (
		<Snippet snippets={reactDispatchActionCreatorSnippets} />
	),
	reactFileCounterReducer: () => (
		<Snippet snippets={reactFileCounterReducerSnippets} />
	),
	reactFileCounterComponent: () => (
		<Snippet snippets={reactFileCounterComponentSnippets} />
	),
};
