import React from 'react';




// components

import NightLifeCarousal from './NightLifeCarousal'


const NightLife=()=>{
    

    return<>
    <div className="lg:px-40">
    <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Collections</h1>
    <NightLifeCarousal />
    <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Nightlife Restaurants in Sholinganallur</h1>
    </div>
    </>
};

export default NightLife;