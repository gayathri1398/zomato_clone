import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const CheckoutNavbar = () => {
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
        <span className="border border-grey-300 rounded-full p-2 text-zomato-400"><FaUserAlt/> </span>
        <h1 className="font-semibold">Gayathri</h1>
    </div>
     </div>
        </nav>
        </>
    ) 
};

export default CheckoutNavbar;
