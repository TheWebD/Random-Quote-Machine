import { createStore } from "redux";
import RandomQouteReducer from "../randomQuoteReducer/RandomQouteRedecuer";
 
const store = createStore(RandomQouteReducer)

export default store;