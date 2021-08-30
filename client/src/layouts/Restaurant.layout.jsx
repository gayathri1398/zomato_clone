import React from 'react';
import {TiStar} from "react-icons/ti"



// components
import Navbar from '../components/Navbar/restaurant';
import Restaurantgrid from '../components/Restaurant/Imagegrid';


const Restaurantlayout = (props) => {
    return (
        <>
        <div className="container mx auto lg:px-52 ">
            <Navbar/>
            <Restaurantgrid image={["https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/0/70150/3a2331f215d476d402ffcea7569a1707.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]} />
           
            <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between">
                <h1 className="text-2xl md:text-4xl font-medium">Pizza Hut</h1>
                <div className="flex gap-8">
                <div className="flex items-center gap-2">
                    <span className="flex items-center px-1 text-white bg-green-400 rounded-lg text-lg">3.7<TiStar/></span>
                  <span className="flex flex-col">
                  <strong>29</strong>
                    <p className="text-sm">Dining Reviews</p>
                    <hr className="border border-dashed border-gray-400"/>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center px-1 text-white bg-green-400 rounded-lg text-lg">3.7<TiStar/></span>
                  <span className="flex flex-col">
                  <strong>29</strong>
                    <p className="text-sm">Delivery Reviews</p>
                    <hr className="border border-dashed border-gray-400"/>
                  </span>
                </div>
                </div>
            </div>
              <div className="text-lg mt-1">
              <h2 className="text-gray-500">Pizza, Fast Food, Desserts</h2>
             <p className="text-gray-400">Karapakkam, Chennai</p>
             <p className="text-gray-400 text-base"><span className="text-yellow-500">Open at</span>-10am-10pm</p>
              </div>
           </div>
           {props.children}

      
</>
    )
}

export default Restaurantlayout;
