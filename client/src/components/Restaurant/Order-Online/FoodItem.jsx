import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {BsPlus} from 'react-icons/bs'

const FoodItem = (props) => {
    return (
        <div className=" w-full flex items-start md:gap-3 justify-between  " >
            <div className="w-24 h-24 md:w-1/5 h-32 rounded-lg p-1">
                <img src="https://b.zmtcdn.com/data/dish_photos/9ef/2cb9a6de4279685609d65345302789ef.jpg?fit=around|130:130&crop=130:130;*,*"
                 alt="Fooditems"
                 className="w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col w-2/4 md:w-2/3">
            <h1 className="text-lg font-semibold">{props.title}</h1>
            <ReactStars
                count={5}
                size={20}
                isHalf={true}
                value={2.5}
                activeColor="#ffd700"
               />
               <p className="font-light">₹{props.price}</p>
               <p className="text-gray-400 text-sm truncate">{props.description}</p>
            </div>
            <button className=" text-xs md:text-base border border-zomato-400 bg-zomato-50 rounded-lg p-1 flex ">ADD <BsPlus/></button>
        </div>
    )
}

export default FoodItem
