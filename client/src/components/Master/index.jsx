import React from 'react';
import {useParams} from 'react-router-dom';

// components
import DeliveryPage from '../Delivery';
import Dining from '../Dining';
import NightLife from '../Nightlife';
import Nutrition from '../Nutrition';


const Master = () => {
    const {type} = useParams();
    
    return <>
    {type==="delivery" && <DeliveryPage/>}
    {type==="dining" && <Dining/>}
    {type==="night" && <NightLife/>}
    {type==="nutri" && <Nutrition/>}
    </>
    
 
    
}

export default Master;
