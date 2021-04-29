import {combineReducers} from "redux"
import postReducer from "./post"

const rootReducer=combineReducers({
    //state.posts burası karsılıyor
    posts:postReducer,
})

export default rootReducer;