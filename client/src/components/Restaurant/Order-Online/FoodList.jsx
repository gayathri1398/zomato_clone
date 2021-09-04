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
{/* 
               <FoodItem
               title="Chicken Maximus Pizza [Medium]"
               price="599"
               description="Loaded with chicken is just an understatement here! Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages 
               & Chicken Kheema along with Black Olives, Onion & Mozzarella Cheese on a soft 11-inch crust."/>
                <FoodItem
               title="Chicken Maximus Pizza [Medium]"
               price="599"
               description="Loaded with chicken is just an understatement here! Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages 
               & Chicken Kheema along with Black Olives, Onion & Mozzarella Cheese on a soft 11-inch crust."/>
                <FoodItem
               title="Chicken Maximus Pizza [Medium]"
               price="599"
               description="Loaded with chicken is just an understatement here! Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages 
               & Chicken Kheema along with Black Olives, Onion & Mozzarella Cheese on a soft 11-inch crust."/>
              
               </div>
               <div>
       <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white z-20" > Pizza </div>
       <FoodItem
               title="Chicken Maximus Pizza [Medium]"
               price="599"
               description="Loaded with chicken is just an understatement here! Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages 
               & Chicken Kheema along with Black Olives, Onion & Mozzarella Cheese on a soft 11-inch crust."/>
                <FoodItem
               title="Chicken Maximus Pizza [Medium]"
               price="599"
               description="Loaded with chicken is just an understatement here! Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages 
               & Chicken Kheema along with Black Olives, Onion & Mozzarella Cheese on a soft 11-inch crust."/>
               </div> */}
   </div>
        </>
    )
}

export default FoodList
