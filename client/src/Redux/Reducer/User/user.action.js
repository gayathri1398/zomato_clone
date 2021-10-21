import axios from 'axios';
import { SELF, GET_USER , CLEAR} from './user.type';

export const getUser =(_id)=>async(dispatch)=>{
    try {
        const user = await axios({
            method:"GET",
            url:`http://localhost:4000/user/${_id}`
        });
        return dispatch({type:GET_USER, payload:user.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
};


export const getmyself =()=>async(dispatch)=>{
    try {
        const user = await axios({
            method:"GET",
            url:`http://localhost:4000/user`
        });
        // localStorage.setItem("zomato",_id);   //no need
        return dispatch({type:SELF, payload:user.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
};

export const cleardata =()=>async(dispatch)=>{
    try {
        return dispatch({type:CLEAR, payload:{}});
         
    } catch (error) {
        return dispatch({type:"ERROR", payload:error});
    }
}