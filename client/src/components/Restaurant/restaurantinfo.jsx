import React from 'react';
import {TiStar} from "react-icons/ti"

const Restaurantinfo = (props) => {
    return (
        <>
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between ">
        <h1 className="text-2xl mt-2 md:text-4xl font-medium">{props.name}</h1>
        <div className="flex gap-8">
        <div className="flex items-center gap-2">
            <span className="flex items-center px-1 text-white bg-green-400 rounded-lg lg:text-lg">{props.restaurantRating}<TiStar/></span>
          <span className="flex flex-col">
          <strong>29</strong>
            <p className="text-sm">Dining Reviews</p>
            <hr className="border border-dashed border-gray-400"/>
          </span>
        </div>
        <div className="flex items-center gap-2">
            <span className="flex items-center px-1 text-white bg-green-400 rounded-lg lg:text-lg">{props.deliveryRating}<TiStar/></span>
          <span className="flex flex-col">
          <strong>29</strong>
            <p className="text-sm">Delivery Reviews</p>
            <hr className="border border-dashed border-gray-400"/>
          </span>
        </div>
        </div>
    </div>
      <div className="text-lg mt-1">
      <h2 className="text-gray-600">{props.cuisions}</h2>
     <p className="text-gray-400">{props.address}</p>
     <p className="text-gray-400 text-sm md:text-base"><span className="text-yellow-500">Open at</span>-{props.restaurantTiming}</p>
      </div>
      </>
    )
}

export default Restaurantinfo
