import React,{useState} from 'react';

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from '../RestaurantCard';

const DeliveryPage = () => {
    const [restaurant, setrestaurant] = useState([
        {
            _id:12345,
            photos:["https://b.zmtcdn.com/data/pictures/chains/4/18386174/619f04006ec03478682c3482403639b0_featured_v2.jpg?output-format=webp"] ,
            isPro :true,
            isOff:80,
            name:"ibaco",
            durationOfDelivery:44,
            cuisions:["Desserts"],
            averageCost:100
        },
        {
            _id:12345-2,
            photos:["https://b.zmtcdn.com/data/pictures/chains/9/68869/fe19a169fed805b14bf2bafdf162c531_o2_featured_v2.jpg?output-format=webp"] ,
            isPro :false,
            isOff:80,
            name:"Loiee Mithai & Rasoi",
            durationOfDelivery:34,
            cuisions:["North Indian, Street Food, Fast Food, Chinese, Mithai, Ice Cream, Beverages"],
            averageCost:100
        },
        {
            _id:12345-2,
            photos:["https://b.zmtcdn.com/data/pictures/chains/9/68869/fe19a169fed805b14bf2bafdf162c531_o2_featured_v2.jpg?output-format=webp"] ,
            isPro :false,
            isOff:80,
            name:"Loiee Mithai & Rasoi",
            durationOfDelivery:34,
            cuisions:["North Indian, Street Food, Fast Food, Chinese, Mithai, Ice Cream, Beverages"],
            averageCost:100
        }
    ]);
    return <>
    
        <div className="lg:px-40">
        <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl ">Inspiration for your first order</h1>
        <DeliveryCarousel/>
        <h1 className="text-gray-800 text-2xl my-6 lg:font-normal text-xl md:text-3xl m-3 px-2 lg:my-6 lg:text-4xl  ">Sholinganallur Restaurants, Chennai</h1>
       <div className="lg:flex flex-wrap justify-evenly">  
           {restaurant.map((restaurant)=>(
                 <RestaurantCard{...restaurant} key={restaurant._id}/>
           ))}
       </div>
        </div>
        <div></div>

    
    </>
}

export default DeliveryPage;
