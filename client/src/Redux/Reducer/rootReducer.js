import { combineReducers } from "redux";

// Reducers
import restaurant from "./Restaurant/restaurant.reducer";

const rootReducer = combineReducers({restaurant});
export default rootReducer;