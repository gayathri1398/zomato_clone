import React from 'react';




// components

import DiningCarousal from './DiningCarousal'


const Dining=()=>{
    

    return<>
    <div className="lg:px-40">
    <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Collections</h1>
    <DiningCarousal />
    <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Dine-Out Restaurants in Sholinganallur</h1>
    </div>
    </>
};

export default Dining;