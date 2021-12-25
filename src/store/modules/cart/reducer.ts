import { Reducer } from "redux";
import { CartState } from "./types";

const INISTIAL_STATE: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = INISTIAL_STATE, action) => {
  // console.log(state, action);

  switch (action.type) {
    case "@cart/ADD":
      const { product } = action.payload;
      // state.items.push({ product, quantity: 1 });
      return {
        ...state,
        items: [...state.items, { product, quantity: 1 }],
      };
      break;

    default:
      return state;
  }
};
export default cart;
