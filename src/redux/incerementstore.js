import { createStore } from "redux"
import incrementReducer from "./increments/incrementReducer"
const store = createStore(incrementReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store