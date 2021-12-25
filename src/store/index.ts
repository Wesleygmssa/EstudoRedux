import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer); // createStore(rootReducer)

export default store;
