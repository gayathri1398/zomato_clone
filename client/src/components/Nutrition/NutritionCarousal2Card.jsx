import React from 'react';


const NutritionSmCard=({image,title})=>{
    return <>
      <div className="bg-white shadow-lg rounded-lg h-28 lg:h-52 mx-3">
      <div className="w-24 h-16 md:w-56 md:h-20 lg:h-36 ">
            <img src= {image}
             alt="fooditems"
             className="w-full h-full rounded-t-lg "  />
              <div className="text-sm text-center">
            <h1 className="lg:text-xl font-light mt-2">{title}</h1>
        </div>
        </div>
      
     </div>
    </>
}


const NutritionCarousal2Card = (props) => {
    return <>
    <NutritionSmCard{...props}/>

     </> 
    
  
}

export default NutritionCarousal2Card;
