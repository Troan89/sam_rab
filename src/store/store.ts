import {combineReducers, createStore} from "redux";
import {counterMenuReducer} from "../reduecrs/counterMenuReducer";
import {appReducer} from "../reduecrs/appReducer";

const rootReducer = combineReducers({
    counterMenu: counterMenuReducer,
    app: appReducer
})

export type AppState_T = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
