import React from 'react';
import {useParams} from 'react-router-dom';

// components
import DeliveryPage from '../components/Delivery';
import Dining from '../components//Dining';
import NightLife from '../components//Nightlife';
import Nutrition from '../components//Nutrition';


const HomePage = () => {
    const {type} = useParams();
    
    return <>
    {type==="delivery" && <DeliveryPage/>}
    {type==="dining" && <Dining/>}
    {type==="night" && <NightLife/>}
    {type==="nutri" && <Nutrition/>}
    </>
    
 
    
}

export default HomePage;
