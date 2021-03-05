import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/ProfileReducer";
import dialogsReducer from "./Reducer/DialogsReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})
let store = createStore(reducers)

export default store