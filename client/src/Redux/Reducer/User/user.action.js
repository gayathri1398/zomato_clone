import axios from 'axios';
import { SELF, GET_USER } from './user.type';

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


export const getmyself =(_id)=>async(dispatch)=>{
    try {
        const user = await axios({
            method:"GET",
            url:`http://localhost:4000/user/${_id}`
        });
        localStorage.setItem("zomato",_id);
        return dispatch({type:SELF, payload:user.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
};