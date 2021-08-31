import React from 'react';
import classNames from 'classnames';
import { useLocation,Link,useParams } from 'react-router-dom';

 const Tabs =(props)=>{
     const {id} = useParams();
     return<>
     <Link to ={`/restaurant/${id}/${props.route}`}>
    <div className={classNames(" text-gray-600 text-base lg:text-xl",{"text-zomato-400 fontsemibold border-b-2 pb-4 border-zomato-400 ":props.isActive})}>
     <h1>{props.title}</h1>
    
    </div>
    
    </Link>
 
    </>
}


const TabsContainer = () => {
    const location =useLocation();

    const currentPath = location.pathname;
    const tabs =[
        {
            title:"Overview",
            route:"overview",
            isActive:currentPath.includes("overview")

         },
         {
            title:"OrderOnline",
            route:"order-online",
            isActive:currentPath.includes("order-online")

         },
         {
            title:"Reviews",
            route:"reviews",
            isActive:currentPath.includes("reviews")

         },
         {
            title:"Menu",
            route:"menu",
            isActive:currentPath.includes("menu")

         },
         {
            title:"Photos",
            route:"photos",
            isActive:currentPath.includes("photos")

         }
        
        
    ]
    return (
        <div className="flex gap-8 overflow-x-scroll md:overflow-hidden  md:gap-16 ">
            {tabs.map((tab)=>(
                 <Tabs{...tab} key={`123${tab.route}`} />
            ))}
         
        </div>
    )
}

export default TabsContainer;
