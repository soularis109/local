import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import questionsReducer from "./questions-reducer";

let reducers = combineReducers({
    questions: questionsReducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store;