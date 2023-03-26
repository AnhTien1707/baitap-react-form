import { combineReducers } from "redux";
import { UserManagerReducer } from "../../duck/UserReducer";

const rootReducer = combineReducers({
    UserManagerReducer,
})
export {rootReducer}