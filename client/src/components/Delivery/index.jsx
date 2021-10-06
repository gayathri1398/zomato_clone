import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux'

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from '../RestaurantCard';

const DeliveryPage = () => {
  
    const [restaurantList, setrestaurantList] = useState([]);
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
        );
    console.log(reduxState.restaurants);
    
    
    useEffect(() => {
        reduxState.restaurants && setrestaurantList(reduxState.restaurants)
    },[reduxState.restaurants])
        
    return <>
    
        <div className="lg:px-52">
        <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Inspiration for your first order</h1>
        <DeliveryCarousel/>
        <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl">Sholinganallur Restaurants, Chennai</h1>
       <div className="w-full md:flex flex-wrap justify-evenly">  
           {restaurantList.map((restaurant)=>(
                 <RestaurantCard{...restaurantList}
                  key={restaurant._id}
                 />
           ))}
       </div>
        </div>
        <div></div>

    
    </>
}

export default DeliveryPage;
