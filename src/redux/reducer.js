const initialState = {
  expenses: 0,
  cash: 20000,
  product: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, product: [...state.product, action.payload] };
    case "BUY":
      return {
        ...state,
        cash:
          state.cash < action.payload
            ? state.cash
            : state.cash - action.payload,
        expenses:
          state.cash < action.payload
            ? state.cash
            : state.expenses + action.payload,
      };
    case "DELETE":
      return {
        ...state,
        product: state.product.filter((el) => el.id !== action.payload.id),
        cash: state.cash + +action.payload.price,
        expenses: state.expenses - +action.payload.price,
      };
    default:
      return state;
  }
};
