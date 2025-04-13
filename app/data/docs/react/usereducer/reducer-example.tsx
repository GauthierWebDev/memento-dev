const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TYPE_1":
      return { ...state /* Nouvel état */ };
    case "TYPE_2":
      return { ...state /* Nouvel état */ };
    default:
      return state;
  }
};
