import React from 'react';

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from '../RestaurantCard';

const DeliveryPage = () => {
    return <>
    
        <div className="lg:px-40">
        <h1 className="text-gray-800 lg:font-normal text-xl md:text-2xl m-3 px-2 lg:my-5 lg:text-3xl ">Inspiration for your first order</h1>
        <DeliveryCarousel/>
       <div className="lg:flex flex-wrap justify-evenly">
       <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
       </div>
        </div>
        <div></div>

    
    </>
}

export default DeliveryPage;
