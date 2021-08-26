import React from 'react';
import Slider from 'react-slick';

const DeliverySmCard=({image,title})=>{
    return <>
      <div className="lg:hidden bg-white shadow-lg rounded-lg ">
      <div className="w-24 h-28 md:w-56 h-20 ">
            <img src= {image}
             alt="fooditems"
             className="w-full h-full rounded-t-lg object-cover"  />
            
        </div>
        <div className="text-sm text-center">
            <h1>{title}</h1>
        </div>
     </div>
    </>
}
const DeliveryLgCard=({image,title})=>{
    return <>
        <div className="hidden lg:block rounded-lg w-72">
      <div className="w-64 h-44 ">
            <img src= {image}
             alt="fooditems"
             className="w-full h-full rounded-t-lg object-cover"  />
            
        </div>
        <div className="text-sm lg:text-base font-semibold">
            <h1>{title}</h1>
        </div>
     </div>
    </>
}

const DeliveryCategory = (props) => {
    return <>
    <DeliverySmCard{...props}/>
   
    <DeliveryLgCard{...props}/>
  
    
     </> 
    
  
}

export default DeliveryCategory;
