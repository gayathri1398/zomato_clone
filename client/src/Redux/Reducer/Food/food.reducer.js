import { GET_FOOD_LIST, GET_FOOD } from "./food.type"


const INITIAL_STATE = {
    foodList:[],
    foodItem:{}
}

const foodReducer=(state=INITIAL_STATE,action)=>{
 switch(action.type){
     case GET_FOOD_LIST:
         return{
             ...state,
             foodList:action.payload
         }
         case GET_FOOD:
         return{
             ...state,
             foodItem:action.payload
         }
         
      default:
          return {
              ...state
          }
 }
}

export default foodReducer;