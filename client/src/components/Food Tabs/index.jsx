import React, {useState} from "react";
import {useParams, Link} from 'react-router-dom';
import classNames from 'classnames';
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

//  useEffect(() => {
//       if (type){
//           const updatedTab = allTypes.map((item)=>{
//               if(item.id===type){
//                 return {...item, isActive: true}
//             }
//             return item;
//           })
//           setAllTypes(updatedTab);
//       }
//  },[type]);

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
    let [allTypes, setAllTypes]= useState([
        {
        id:"delivery",
        defaultImage:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        activeImage:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        activeColor:"yellow",
        name:"Delivery",
        
        },
        {
            id:"dining",
            defaultImage:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            activeImage:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            activeColor:"blue",
            name:"Dining Out",
            
            },
            {
                id:"night",
                defaultImage:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
                activeImage:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
                activeColor:"blue",
                name:"Night life",
                
                },
                {
                    id:"nutri",
                    defaultImage:"https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
                    activeImage:"https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
                    activeColor:"yellow",
                    name:"Nutrition",         
                }
]);
const {type} = useParams();
    return<>
      <div className=" container mx-auto px-40 flex items-center gap-12 mt-8 ml-8 py-4">
          {allTypes.map((items)=>(
              <Link to ={`/${items.id}`}>
                
                <div className="flex items-center gap-3 text-gray-500 ">
               
                <div className={classNames( "w-12 h-12 bg-gray-100 rounded-full p-2",{[`bg-${items.activeColor}-100`]:type===items.id})}>
                <img src={items.id === type ? items.activeImage:items.defaultImage} 
                alt={items.name}
                className="w-full h-full"/>
                </div>
                <h1 className={classNames("text-xl font-semibold text-gray-500",{"text-zomato-400":type===items.id})}>{items.name}</h1>
                </div>
                <div className={classNames({"absolute border-b-2 border-zomato-400 bottom-0 w-36 ":items.id===type})}/>
                </Link>
          ))}
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