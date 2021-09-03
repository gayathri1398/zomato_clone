import React from 'react';
import {AiFillCompass} from 'react-icons/ai';
import {IoMdTime} from 'react-icons/io'

// components
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';
import FloatMenuButton from '../../components/Restaurant/Order-Online/FloatMenuButton';
import FoodItem from '../../components/Restaurant/Order-Online/FoodItem';
import FoodList from '../../components/Restaurant/Order-Online/FoodList';


const OrderOnlinepage = () => {
    return (
        <div className="px-2 w-full lg:px-52 flex">
          <aside className="hidden md:block w-1/4 h-screen">  
             <MenuListContainer/>
          </aside>
          <div >
          <FloatMenuButton/>
          </div>
          
          <div className="w-full md:w-4/5 pl-4">
              <h1 className="text-2xl font-semibold my-3 ">Order Online</h1>
             <div className="flex text-gray-500 text-sm"> 
                 <span className="flex items-center gap-1 border-r-2 border-gray-500 pr-2"><AiFillCompass/>Live track your order</span>
              <span className="flex items-center gap-1 pl-2"><IoMdTime/>45 min</span></div>
              
               <section>
               <FoodList/>
               </section>
          </div>
        </div>
    )
}

export default OrderOnlinepage;
