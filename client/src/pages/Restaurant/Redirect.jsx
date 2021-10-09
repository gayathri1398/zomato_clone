import React ,{useEffect}from 'react'
import {useHistory,useParams}from 'react-router-dom';


const Redirect = () => {
    const history = useHistory();
    const {id} = useParams();
     useEffect(()=>{
       history.push(`/restaurant/${id}/overview`)
    },[])
    return (
        <div></div>      //cannot be redirected directly in app.js so creating it separate component
    ) 
}

export default Redirect;
