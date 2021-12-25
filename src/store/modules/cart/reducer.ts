import { Reducer } from "redux";
import { CartState } from "./types";

const INISTIAL_STATE: CartState = {
  items: [],
};

const cart: Reducer<CartState> = () => {
  return INISTIAL_STATE;
};

export default cart;
