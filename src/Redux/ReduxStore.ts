import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/ProfileReducer";
import dialogsReducer from "./Reducer/DialogsReducer";
import usersReducer from "./Reducer/UserReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
})

export type StoreReducerType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store