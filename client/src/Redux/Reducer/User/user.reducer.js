import { SELF, GET_USER, CLEAR } from "./user.type";

const INITIAL_STATE ={
    user:{}
}

const userReducer = (state= INITIAL_STATE,action)=>{
  switch (action.type){
      case GET_USER:
          return {
              ...state,
              user:action.payload
          }
      case SELF:
          return {
              ...state,
              user:action.payload
          }
          case CLEAR:
              return{}
      default:
          return{
              ...state
          }
  }
};

export default userReducer;