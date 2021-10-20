import React,{useEffect} from 'react';
import { useParams,useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// actions
import { googleSignIn } from '../Redux/Reducer/Auth/auth.action';

const GoogleAuthpage = () => {
    const {token} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
 

    useEffect(() => {
        if(token){
            dispatch(googleSignIn(token)).then(()=> history.push(`/delivery`))
        } 
    }, [token])  // pass the dependency else nvr works

    return <>
    <div>
        Please wait its Loading!!!
    </div>
    
   </> 
}

export default GoogleAuthpage
