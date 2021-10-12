import { combineReducers } from "redux";

// Reducers
import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Image/image.reducer"
import reviews from './Review/review.reducer'
import user from './User/user.reducer';


const rootReducer = combineReducers({restaurant,image,reviews,user});
export default rootReducer;