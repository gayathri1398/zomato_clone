import { combineReducers } from "redux";

// Reducers
import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Image/image.reducer"

const rootReducer = combineReducers({restaurant,image});
export default rootReducer;