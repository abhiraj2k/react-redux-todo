import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from './ducks/todos'

const reducer = combineReducers({
    todoList: todoReducer,
});
const store = createStore(reducer, composeWithDevTools());

export default store;