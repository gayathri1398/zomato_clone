import { SELF, GET_USER } from "./user.type";

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
      default:
          return{
              ...state
          }
  }
};

export default userReducer;