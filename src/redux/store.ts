import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export let store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>