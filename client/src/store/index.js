import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import { filtersReducer } from "./filtersReducer";

export const store = createStore(filtersReducer, applyMiddleware(thunk));