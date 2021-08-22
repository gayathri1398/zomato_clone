import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {TiArrowSortedDown} from 'react-icons/ti';
import {BsSearch} from 'react-icons/bs';

const Navsm=()=>{
    return<>
     <div className="flex items-center justify-between px-3 bg-white shadow-md ">
     <div className="w-24 m-4 ">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
        alt="zomato logo"
        className="w-full h-full"/>
    </div>
    <div className="flex items-center gap-3">
        <button className=" px-2 py-1 bg-zomato-400 rounded-full text-white text-sm">Use App</button>
        <span className="border border-grey-300 rounded-full p-2 text-zomato-400"><FaUserAlt/></span>
    </div>
     </div>
    </>
};

const Navlg=()=>{
    return <>
     <div className="flex items-center">
     <div className="w-36 m-6 ">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
        alt="zomato logo"
        className="w-full h-full"/>
    </div>
   <div className="flex items-center justify-between w-full ">
   <div className="border border-gray-300 flex items-center text-gray-400 rounded-md px-3 py-2 bg-white shadow-md w-2/3">
     <span className="text-zomato-400 text-xl"><HiLocationMarker/></span>
       <input type="text"
        placeholder="Sholinganallur, Chennai"
        className="outline-none px-2" />
      <span className="pl-3"><TiArrowSortedDown/></span>

      <div className="border-r-2 border-gray-400 h-8 p-3 "/>
      <span className="px-3 text-xl"><BsSearch/></span>
      <input type="search"
       placeholder="Search for restaurant, cuisine or a dish"
       className="w-full outline-none" />
    </div>
    <div className="flex text-gray-400 gap-8 w-1/5 text-xl">
       <button className="text-gray hover:text-gray-500" >Log in</button>
       <button className="text-gray hover:text-gray-500">Sign up</button>
    </div>
    </div>
     </div>
    </>
};



const Navbar = () => {
    return (
        <>
        <nav > 
            <div className="block lg:hidden"><Navsm/> </div>
            <div className="hidden lg:block"><Navlg/></div>
        </nav>
        </>
    )
};

export default Navbar;
