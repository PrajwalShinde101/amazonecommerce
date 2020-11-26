export const initialState = {
  basket: [],
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      var total1 = state.total + action.item.price;

      return {
        ...state,
        basket: [...state.basket, action.item],
        total: total1,
      };
      break;
    case "REMOVE_FROM_BASKET":
      var total1 = state.total - action.item.price;

      let newbasket = [...state.basket];

      const index = newbasket.findIndex(
        (basketItem) => basketItem.id == action.item.id
      );

      if (index >= 0) {
        newbasket.splice(index, 1);
      }
      return { ...state, basket: newbasket, total: total1 };
      break;

    default:
      return state;
  }
}
export default reducer;
