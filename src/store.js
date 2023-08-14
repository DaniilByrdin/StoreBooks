import { createStore } from "redux";
import Reducer from "./reducers/reducer";


const Store = createStore(Reducer)

window.store = Store

// store.getState()

export default Store