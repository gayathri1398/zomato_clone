import React from 'react';
import {TiStar} from 'react-icons/ti';


export const MenuSimilarRestaurant=(props)=>{

    return <>
       
        <div className=" rounded-lg m-2 ">
      <div className="w-full h-48">
            <img src= {props.image}
             alt="fooditems"
             className="w-full h-full rounded-lg object-cover"  />
            
        </div>
       <div className="p-2"> 
           <div className="text-sm lg:text-base font-semibold">
            <h1>{props.title}</h1>
           </div>
       <div className="flex items-center justify-between mt-2 text-sm ">
       <div className="flex items-center gap-2">
            <span className="flex items-center bg-green-400 text-white px-1 rounded-lg">3.5<TiStar/></span>
            <span className="border-r-2 pr-1 ">Dining</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="flex items-center bg-green-400 text-white px-1 py- rounded-lg">3.5<TiStar/></span>
            <span>Delivery</span>
        </div>
        </div>
       <p className="font-light">Pizza, Fast Food, Desserts</p>
       <p className="font-semibold text-gray-500">Karapakkam,Chennai</p>
       </div>
     </div>
       
    </>
}




// export default MenuSimilarRestaurantCarousel;