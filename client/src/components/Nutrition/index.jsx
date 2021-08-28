import React from 'react';


// components
import NutritionCarousal from './NutritionCarousal';
import NutritionCarousal2 from './NutritionCarousal2';
import NutritionCard from './NutritionCard';



const Nutrition = () => {
    return (
        <>
        <div className="lg:px-52">
        <div className="w-11/12 lg:w-full ">
            <NutritionCarousal  />
        </div>
            <div className="w-full my-12   "><NutritionCarousal2/></div>
          <div >
              <h1 className="text-lg font-medium lg:text-xl mb-4 flex flex-wrap">All Products</h1>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              
          </div>
          </div>
        </>
    )
}

export default Nutrition
