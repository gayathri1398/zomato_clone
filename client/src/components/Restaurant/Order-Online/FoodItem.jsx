import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import ReactStars from 'react-rating-stars-component';
import {BsPlus} from 'react-icons/bs'

// redux action
import { getFood } from '../../../Redux/Reducer/Food/food.action';
import { getImage } from '../../../Redux/Reducer/Image/image.action';

const FoodItem = (props) => {
    const[food, setFood] = useState({});
    const dispatch = useDispatch();

    console.log({state:food})

    useEffect(()=>{
        dispatch(getFood()).then((data)=> console.log(data.payload.food))
    },[]);
    console.log({food})

    return (
        <>
     
        <div className=" w-full flex items-start md:gap-3 justify-between  " >
            
              
                    <div className="w-24 h-24 md:w-1/5 h-32 rounded-lg p-1">
                        <img src={food?.images}
                        alt="Fooditems"
                        className="w-full h-full rounded-lg" />
                   </div>
                
            
            <div className="flex flex-col w-2/4 md:w-2/3">
            <h1 className="text-lg font-semibold">{food?.name}</h1>
            <ReactStars
                count={5}
                size={20}
                isHalf={true}
                value={2.5}
                activeColor="#ffd700"
               />
               <p className="font-light">₹{food?.price}</p>
               <p className="text-gray-400 text-sm truncate">{food?.description}</p>
            </div>
            <button className=" text-xs md:text-base border border-zomato-400 bg-zomato-50 rounded-lg p-1 flex ">ADD <BsPlus/></button>
        </div>
        

        </>
    )
}

export default FoodItem;
