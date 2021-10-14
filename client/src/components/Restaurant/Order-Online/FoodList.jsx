import React from 'react'

// components
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return (
        <>
      
       <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white z-20" >
            {props.name}
           
            </div>
       {props.items.map((item)=>(
            <FoodItem key={item} _id={item}/>
           
       ))}
     
        </>
    )
}

export default FoodList
