import React from "react";
import {GrDeliver} from "react-icons/gr";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {RiFootprintLine} from "react-icons/ri";
import {BiDrink} from "react-icons/bi";
import {IoNutritionOutline} from "react-icons/io5";
const MobileFoodTabs=()=>{
    return<>
   <div className="flex bg-white shadow-inner bottom-0 z-10 border p-3 items-center justify-between md:justify-evenly fixed w-full px-5 text-gray-500  ">
   <div className="flex flex-col items-center">
          <span className="text-2xl"><HiOutlineShoppingBag/></span>
          <h1 className="text-sm">Delivery</h1>
      </div>
      <div className="flex flex-col items-center  ">
          <span className="text-2xl"><RiFootprintLine/></span> 
          <h1 className="text-sm">Dining Out</h1>
      </div>
      <div className="flex flex-col items-center  ">
          <span className="text-2xl"><BiDrink/></span>
          <h1 className="text-sm">Night life</h1>
      </div>
      <div className="flex flex-col items-center  ">
          <span className="text-2xl"><IoNutritionOutline/></span>
          <h1 className="text-sm">Nutrition</h1>
      </div>
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
    <h1 className="text-xl font-bold">Delivery</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" 
        alt="Dining Out"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-bold">Dining Out</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" 
        alt="Night Out"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-bold">Night Out</h1>
       </div>
       <div className="flex items-center gap-3 text-gray-500">
       <div className="w-16 h-16 rounded-full bg-gray-100 p-3 ">
        <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" 
        alt="Nutrition"
        className="w-full h-full"  />
    </div>
    <h1 className="text-xl font-bold">Nutrition</h1>
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