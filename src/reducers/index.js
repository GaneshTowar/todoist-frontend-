import todoReducers from "./todoReducers";
import edittodoReducer from "./editReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers,
    edittodoReducer
})

export default rootReducer