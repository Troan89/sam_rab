import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterMenuReducer} from "../reduecrs/counterMenuReducer";
import {counterReducer} from "../reduecrs/counterReducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    counterMenu: counterMenuReducer,
    counter: counterReducer
})

export type AppState_T = ReturnType<typeof rootReducer>

let preloadedState
const persistedTodosString = localStorage.getItem('state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))


store.subscribe(()=> {
    localStorage.setItem("startValue", JSON.stringify(store.getState().counter?.counter))
    localStorage.setItem("maxValue", JSON.stringify(store.getState().counterMenu?.maxValue))
    localStorage.setItem("minValue", JSON.stringify(store.getState().counterMenu?.minValue))
})


