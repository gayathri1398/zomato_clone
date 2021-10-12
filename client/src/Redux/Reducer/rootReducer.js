import { combineReducers } from "redux";

// Reducers
import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Image/image.reducer"
import reviews from './Review/review.reducer'


const rootReducer = combineReducers({restaurant,image,reviews});
export default rootReducer;