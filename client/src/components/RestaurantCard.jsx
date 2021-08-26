import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai'

const RestaurantCard = () => {
    return<>
     <div className="mb-20 m-4 bg-white shadow-lg border rounded-md">
        <div className="relative" >
                
            <div className="w-full h-48 md:h-52 lg:w-80 lg:h-60" >
                <img src="https://b.zmtcdn.com/data/pictures/chains/3/18460193/85a315765de79046319a6bcdaae3416b_o2_featured_v2.jpg" 
                alt="Food"
                className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="absolute bottom-2 flex justify-between w-full items-end ">
                <div className="text-white flex flex-col gap-2">
                <h1 className="bg-zomato-400 rounded-r px-1 text-sm">Pro extra 10% OFF</h1>
                <h1 className="bg-blue-400 rounded-r px-1 text-sm">80% OFF</h1>
            </div>
                <span className="bg-white opacity-75 rounded py-1 px-2 text-sm mr-2">45min</span>
            </div>
        </div>
       <div className="flex justify-between my-2 mx-2">
       <div className="flex flex-col">
            <h1 className="text-base">Ovenstory Pizza</h1>
            <p className="text-sm text-gray-500">Pizza,Italian</p>
        </div>
        <div className="flex flex-col items-end">
            <span className="bg-green-500 text-white flex w-9 text-sm items-center justify-center rounded">3.9<AiTwotoneStar className="text-sm"/></span>
            <p className="text-sm text-gray-500"> ₹250 for one</p>
        </div>
       </div>
        </div>
    </>
}

export default RestaurantCard
