import React from 'react';


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

           <div className="w-full border">
           <div className="flex gap-1 borderw-full h-96">
           <div className="hidden md:block w-7/12 hover:tranform scale-50">
            <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
            alt="restaurant food image"
            className="w-full h-full object-cover" />
            </div>
              <div className=" w-1/3 flex gap-1">
              <div className="flex flex-col gap-1">
                <div className="hidden md:block w-full h-48">
                   <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:block w-full h-48">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                <div className="hidden md:block w-full h-48">
                   <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:block w-full h-48">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/0/18512380/9a60985de026ed701b2a2113d42ec8fc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
                    alt="restaurant food image"
                    className="w-full h-full object-cover" />
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
