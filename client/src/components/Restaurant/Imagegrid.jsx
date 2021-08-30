import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai' ;

const Restaurantgrid = (props) => {
    return (
        <>
         {/*grid*/}
         <div className="w-full h-60 md:hidden">
         <img src={props.image.length && props.image[0]} 
         alt="restaurant food image"
         className="w-full h-full" />
        </div>

        <div className="w-full mt-5">
        <div className="flex gap-1 md:h-80 lg:h-96">
        <div className="hidden md:block w-full overflow-hidden rounded-lg">
         <img src={props.image.length && props.image[0]}
         alt="restaurant food image"
         className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500 ease-out " />
         </div>
           <div className=" w-1/2 flex gap-1">
           <div className="flex flex-col gap-1">
             <div className="hidden md:block w-full h-48 overflow-hidden rounded-lg">
                <img src={props.image.length && props.image[1]}
                 alt="restaurant food image"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500 ease-out " />
                 </div>
                 <div className="hidden md:block w-full h-48 overflow-hidden rounded-lg">
                 <img src={props.image.length && props.image[2]} 
                 alt="restaurant food image"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500 ease-out " />
                 </div>
             </div>
             <div className="flex flex-col gap-1">
             <div className="hidden md:block w-full h-48 relative text-center">
                <img src={props.image.length && props.image[3]} 
                 alt="restaurant food image"
                 className="w-full h-full object-cover rounded-lg" />
                 <div className="absolute bg-black bg-opacity-50 inset-0 rounded-lg"/>
                 <h2 className="absolute inset-y-2/4 text-white font-medium w-full">View Gallery</h2>
                 </div>
                 <div className="hidden md:block w-full h-48 relative text-center">
                 <img src={props.image.length && props.image[4]} 
                 alt="restaurant food image"
                 className="w-full h-full object-cover rounded-lg" />
                 <div className="bg-gray-500 absolute bg-opacity-75 inset-0 rounded-lg"/>
                  <div className="w-full flex flex-col items-center ">
                  <div className=" w-12 h-12 p-3 rounded-full bg-gray-800 bg-opacity-75 absolute inset-y-1/4">
                   <span className="text-2xl text-white"> <AiOutlineCamera/></span>
                </div>
                <h2 className="absolute inset-y-2/4 text-white font-medium w-full">Add Photos</h2>
                  </div>
                 </div>
             </div>
           </div>
           
        </div>
        </div>
        </>
    )
}

export default Restaurantgrid;
