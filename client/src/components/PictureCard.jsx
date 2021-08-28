import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";

const PictureCard = () => {
    return (
        <>
        <div className="relative mr-4 rounded-lg">
        <div className="w-full h-64 md:h-64 lg:h-80 rounded-b-lg ">
            <img src="https://b.zmtcdn.com/data/pictures/chains/2/68502/b61811fd24b9bbf4105851283e821e05.jpg?fit=around|960:500&crop=960:500;*,*" 
            alt="food" 
            className="w-full h-full object-cover rounded-lg"/>
            <div
            className="absolute top-0 w-full  h-64 md:h-64 lg:h-80 "
             style={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                     borderRadius:"10px"
                }}/>
        </div>
        </div>
        <div className="absolute bottom-2 ml-4 rounded-lg">
            <h1 className="text-white ">Veggie Friendly</h1>
            <h4 className="flex items-center text-white">10 Places<IoMdArrowDropright/></h4>
        </div>
       
        </>
    )
}

export default PictureCard
