import React from 'react';
import {useParams} from 'react-router-dom';

// components
import DeliveryPage from '../Delivery';
import Dining from '../Dining';
import NightLife from '../Nightlife';

const Master = () => {
    const {type} = useParams();
    
    return <>
    {type==="delivery" && <DeliveryPage/>}
    {type==="dining" && <Dining/>}
    {type==="night" && <NightLife/>}
    </>
    
 
    
}

export default Master;
