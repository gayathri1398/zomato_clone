import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai' ;


// components
import Navbar from '../components/Navbar/restaurant';

const Restaurantlayout = (props) => {
    return (
        <>
        <div className="container mx auto lg:px-40">
            <Navbar/>
            {props.children}
        {/*grid*/}
        <div className="w-full h-60 md:hidden">
            <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
            alt="restaurant food image"
            className="w-full h-full" />
        </div>

           <div className="w-full ml-9">
           <div className="flex gap-1 md:h-80 lg:h-96">
           <div className="hidden md:block w-7/12">
            <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
            alt="restaurant food image"
            className="w-full h-full object-cover rounded-lg" />
            </div>
              <div className=" w-1/3 flex gap-1">
              <div className="flex flex-col gap-1">
                <div className="hidden md:block w-full h-48">
                   <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="hidden md:block w-full h-48">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                <div className="hidden md:block w-full h-48 relative text-center">
                   <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute bg-black bg-opacity-50 inset-0 rounded-lg"/>
                    <h2 className="absolute inset-y-2/4 text-white font-medium w-full">View Gallery</h2>
                    </div>
                    <div className="hidden md:block w-full h-48 relative text-center">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
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
          
  
           </div>

      
</>
    )
}

export default Restaurantlayout;
