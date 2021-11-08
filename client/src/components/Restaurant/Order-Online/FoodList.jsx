import React from 'react'

// components
import FoodItem from './FoodItem';

const FoodList = (props) => {
   
    return (
        <>
    
            <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white " >
              {props.name}
              
            <div className="flex flex-col gap-3">
             {props.items?.map((item)=>(
             <FoodItem key={item} _id={item} />  
           
             ))} 
             </div>
                
             </div>   
     
     
        </>
    )
}


export default FoodList
