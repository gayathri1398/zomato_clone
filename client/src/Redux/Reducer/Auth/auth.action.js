import axios from 'axios';
import { SIGN_IN, SIGN_UP,GOOGLE_AUTH } from './auth.type';

// actions
import { getmyself } from '../User/user.action';


export const signIn =(userData)=> async(dispatch)=>{
try {
    const User = await axios({
        method:"POST",
        url:`http://localhost:4000/auth/signin`,
        data:{credentials: userData }
    });
    
    localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token}))
    getmyself();                          //update the user so the myself action is called

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
        localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token}));

        getmyself();  

        return dispatch({type:SIGN_UP, payload:User.data});
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
    }
}

export const googleSignIn =(token)=>async(dispatch)=>{
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({token}));

        getmyself();  

        return dispatch({type:GOOGLE_AUTH, payload:{}})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}