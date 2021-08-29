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
              <h1 className="text-lg ml-3 font-medium lg:text-xl mb-4">All Products</h1>
              <div className="flex flex-wrap ">
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>
              <NutritionCard/>

              </div>
          </div>
          </div>
        </>
    )
}

export default Nutrition
