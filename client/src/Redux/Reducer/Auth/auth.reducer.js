import {SIGN_IN,SIGN_UP} from './auth.type';

const INITIALSTATE={};

const userReducer=(state=INITIALSTATE, action)=>{
 switch(action.type){
     case SIGN_IN:
         return{
             ...state
         };
     case SIGN_UP:
         return{
             ...state
         }
     default:
         return{
             ...state
         }
 }
};

export default userReducer;