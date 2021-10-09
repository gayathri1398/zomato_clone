import { GET_RESTAURANT, GET_SPECIFICRESTAURANT } from "./restaurant.type";


const INITIAL_STATE = {
   restaurants :[],
   specificRestaurant:{}
};

const restaurantReducer =(state= INITIAL_STATE, action)=>{
    switch (action.type){
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants:action.payload,
            }
        case GET_SPECIFICRESTAURANT:
            return {
                ...state,
                specificRestaurant:action.payload
            }
        default:
            return{
                ...state
            }
    }
};

export default restaurantReducer;
