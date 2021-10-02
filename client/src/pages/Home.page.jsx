import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux' ;


// components
import DeliveryPage from '../components/Delivery';
import Dining from '../components//Dining';
import NightLife from '../components//Nightlife';
import Nutrition from '../components//Nutrition';

// redux actions
import { getRestaurant } from '../Redux/Reducer/Restaurant/restaurant.action';



const HomePage = () => {
    const {type} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch( getRestaurant());
    }, [])

    
    return <>
    {type==="delivery" && <DeliveryPage/>}
    {type==="dining" && <Dining/>}
    {type==="night" && <NightLife/>}
    {type==="nutri" && <Nutrition/>}
    </>
    
 
    
}

export default HomePage;
