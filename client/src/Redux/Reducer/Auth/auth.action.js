import axios from 'axios';
import { SIGN_IN, SIGN_UP } from './auth.type';

// types


export const signIn =(userData)=> async(dispatch)=>{
try {
    const User = await axios({
        method:"POST",
        url:`http://localhost:4000/auth/signin`,
        data:{credentials: userData }
    });
    
    localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token}))

    return dispatch({type:SIGN_IN, payload:User.data})
} catch (error) {
    return dispatch({type:"ERROR",payload:error})
}
};

export const signUp =(userData)=>async(dispatch)=>{
    try {
        const User = await axios({
            method:"POST",
            url:`http://localhost:4000/auth/signup`,
            data:{credentials:userData}
        });
        return dispatch({type:SIGN_UP, payload:User.data});
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
    }
}
