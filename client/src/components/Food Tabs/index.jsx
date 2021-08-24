import React, {useState,useEffect} from "react";
import {useParams, Link} from 'react-router-dom'
import {HiOutlineShoppingBag} from "react-icons/hi";
import {RiFootprintLine} from "react-icons/ri";
import {BiDrink} from "react-icons/bi";
import {IoNutritionOutline} from "react-icons/io5";

const MobileFoodTabs=()=>{
    
    let [allTypes, setAllTypes]= useState([
        {
        id:"delivery",
        icon:<HiOutlineShoppingBag/>,
        name:"Delivery",
        isActive:false
        },
        {
            id:"dining",
            icon:<RiFootprintLine/>,
            name:"Dining Out",
            isActive:false
            },
            {
                id:"night",
                icon:<BiDrink/>,
                name:"Night life",
                isActive:false
                },
                {
                    id:"nutri",
                    icon:<IoNutritionOutline/>,
                    name:"Nutrition",
                    isActive:false       
                }
]);
const {type} = useParams();

 useEffect(() => {
      if (type){
          const updatedTab = allTypes.map((item)=>{
              if(item.id===type){
                return {...item, isActive: true}
            }
            return item;
          })
          setAllTypes(updatedTab);
      }
 },[type]);

    return<>
   <div className="flex bg-white shadow-inner bottom-0 z-10 border p-3 items-center justify-between md:justify-evenly fixed w-full px-5 text-gray-500  ">
   {allTypes.map((items)=>(
       <Link to={`${items.id}`}>
        <div className={ (type===items.id)? 
        "flex flex-col items-center relative text-zomato-400 ":"flex flex-col items-center"}>
              <div className={(type===items.id) && "border-t-2 border-zomato-400 w-full absolute -top-3"}/>
          <span className="text-2xl">{items.icon}</span>
          <h1 className="text-sm">{items.name}</h1>
      </div>
      </Link>
  ))}
 
   </div>
    
    </>
}
const LargeFoodTabs=()=>{
    return<>
      <div className=" container mx-auto px-40 flex items-center gap-12 mt-8 ml-8 py-4">
      <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" 
        alt="Delivery"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-semibold">Delivery</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" 
        alt="Dining Out"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-semibold">Dining Out</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" 
        alt="Night Out"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-semibold">Night Out</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" 
        alt="Nutrition"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-semibold">Nutrition</h1>
       </div>
      </div>
    </>
}


const FoodTabs=()=>{
    return<>
     <div className="lg:hidden"><MobileFoodTabs/></div> 
     <div className="hidden lg:inline"><LargeFoodTabs/></div> 
    </>
};

export default FoodTabs;