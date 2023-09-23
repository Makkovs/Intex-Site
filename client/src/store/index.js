import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { filtersReducer } from "./filtersReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    filters: filtersReducer, 
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));