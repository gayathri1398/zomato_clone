import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import gravatar from 'gravatar';
import { useSelector } from 'react-redux';

const CheckoutNavbar = () => {
    const reduxState = useSelector((globalState)=> globalState.user.user);
    
    return (
        <>
        <nav > 
        <div className="flex items-center justify-between px-3 bg-white">
      <AiOutlineArrowLeft/>
     <div className="w-36 m-4 ">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
        alt="zomato logo"
        className="w-full h-full"/>
    </div>
    <div className="flex items-center gap-3">
    <div className="border border-grey-300 rounded-full p-2 text-zomato-400 w-16 h-16 relative">
               <img src={gravatar.url("gayugayathri1309@gmail.com")}     // general: reduxState?.user?.email
               alt={reduxState?.user?.email}
               className="w-full h-full object-cover rounded-full"
              />   
              </div>   
            <h1 className="font-semibold ">{reduxState?.user?.fullname}</h1>
    </div>
     </div>
        </nav>
        </>
    ) 
};

export default CheckoutNavbar;
