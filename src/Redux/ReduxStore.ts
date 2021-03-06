import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/ProfileReducer";
import dialogsReducer from "./Reducer/DialogsReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

export type StoreReducerType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store