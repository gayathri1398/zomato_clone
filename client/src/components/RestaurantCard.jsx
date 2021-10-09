import React ,{useEffect, useState}from 'react';
import {Link} from 'react-router-dom'
import {AiTwotoneStar} from 'react-icons/ai';
import { useDispatch } from 'react-redux';



// actions
import { getImage } from '../Redux/Reducer/Image/image.action';



const RestaurantCard = (props) => {
    const [image,setImage] = useState({
        images:[]
      
    });
   console.log(image)
     const dispatch = useDispatch();

    

     useEffect(()=>{
        props.photos && 
        dispatch(getImage(props.photos)).then((data)=> setImage(data.payload.image.image))
     },[props.photos]);
     
    return(
    <Link to={`/restaurant/${props._id}`}>
     <div className="mb-2 m-4 bg-white rounded-2xl shadow-lg md:w-5/12 lg:shadow-none lg:w-80 hover:shadow-lg transition duration-700 ease-in-out mb-40">
       
        <div className="relative" >     
            <div className="w-full h-48 p-2 md:h-52 lg:w-80 lg:h-60" >
                <img src={image.length && image[0].location}       //image - useState
                alt="Food"
                className="w-full h-full object-cover rounded-t-2xl lg:rounded-2xl" />
            </div>
            <div className="absolute bottom-3 flex justify-between w-full items-end ">
                <div className="text-white flex flex-col gap-2">
                {props.isPro && (
                    <h1 className="bg-zomato-400 rounded-r px-1 m-2 text-sm">Pro extra 10% OFF</h1>
                )}
               {props.isOff && (
                    <h1 className="bg-blue-400 rounded-r px-1 m-2 text-sm">₹{`${props.isOff}`}OFF</h1>
               )}
            </div>
                <span className="bg-white opacity-75 rounded py-1 px-2 text-sm mr-2">{props.durationOfDelivery}min</span>
            </div>
        </div>
       <div className="flex justify-between my-1 mx-2 p-1">
       <div className="flex flex-col">
            <h1 className="text-base">{props.name}</h1>
            <p className="text-sm text-gray-500">{props.cuisions.join(", ")}</p>
        </div>
        <div className="flex flex-col items-end">
            <span className="bg-green-500 text-white flex w-9 text-sm items-center justify-center rounded">{props.restaurantReviewValue}<AiTwotoneStar className="text-sm"/></span>
            <p className="text-sm text-gray-500"> ₹{props.averageCost} for one</p>
        </div>
       </div>
        </div>
    </Link>
    )
}

export default RestaurantCard;
