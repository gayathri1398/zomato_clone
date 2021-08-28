import React from 'react';


// components
import NutritionCarousal from './NutritionCarousal';
import NutritionCarousal2 from './NutritionCarousal2';



const Nutrition = () => {
    return (
        <>
        <div className="lg:px-52">
        <div className="w-11/12 lg:w-full ">
            <NutritionCarousal  />
        </div>
            <div className="w-full my-12   "><NutritionCarousal2/></div>
          <div >
              <h1 className="text-lg font-medium lg:text-xl ">All Products</h1>
          </div>
          </div>
        </>
    )
}

export default Nutrition
