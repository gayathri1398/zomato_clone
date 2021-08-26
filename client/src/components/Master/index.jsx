import React from 'react';
import {useParams} from 'react-router-dom';

// components
import DeliveryPage from '../Delivery';

const Master = () => {
    const {type} = useParams();
    
    return <>
    {type==="delivery" && <DeliveryPage/>}
    </>
    
 
    
}

export default Master;
