import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux'

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from '../RestaurantCard';

const DeliveryPage = () => {
  
    const [restaurantList, setrestaurantList] = useState([
        // {
        //     _id:"123",
        //     photoss:["https://b.zmtcdn.com/data/pictures/chains/8/65528/6500ebf7d8c9769dbc611e4c524bea3d_o2_featured_v2.jpg?output-format=webp",
        // "https://b.zmtcdn.com/data/pictures/chains/8/65528/6500ebf7d8c9769dbc611e4c524bea3d_o2_featured_v2.jpg?output-format=webp"],
        //     isPro:true,
        //     isOFF:"80",
        //     durationOfDelivery:"55",
        //     name:"Pizza hut",
        //     averageCost:"160",
        //     cuisions:["burger","pizza"]
        // },
        // {
        //     _id:"123",
        //     photoss:["https://b.zmtcdn.com/data/pictures/chains/8/65528/6500ebf7d8c9769dbc611e4c524bea3d_o2_featured_v2.jpg?output-format=webp",
        // "https://b.zmtcdn.com/data/pictures/chains/8/65528/6500ebf7d8c9769dbc611e4c524bea3d_o2_featured_v2.jpg?output-format=webp"],
        //     isPro:true,
        //     isOFF:"80",
        //     durationOfDelivery:"55",
        //     name:"Pizza hut",
        //     averageCost:"160",
        //     cuisions:["burger","pizza"]
        // },
  

    ]);
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
                 <RestaurantCard{...restaurant}
                  key={restaurantList._id}
                 />
           ))}
       </div>
        </div>
        <div></div>

    
    </>
}

export default DeliveryPage;
