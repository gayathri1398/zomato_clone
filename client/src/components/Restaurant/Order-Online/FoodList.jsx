import React from 'react'

// components
import FoodItem from './FoodItem'
const FoodList = () => {
    return (
        <>
        <div>
       <div className="sticky top-2 text-lg md:text-2xl p-2 bg-white z-20" > Recommended </div>
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
               </div>
   
        </>
    )
}

export default FoodList
