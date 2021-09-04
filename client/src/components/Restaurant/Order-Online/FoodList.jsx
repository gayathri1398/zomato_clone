import React from 'react'

// components
import FoodItem from './FoodItem'
const FoodList = (props) => {
    return (
        <>
        <div>
       <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white z-20" > {props.title}</div>
       {props.items.map((item)=>(
            <FoodItem {...item}/>
       ))}

            
   </div>
        </>
    )
}

export default FoodList
