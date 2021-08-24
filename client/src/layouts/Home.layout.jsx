import React from "react";


// Components
import Navbar from "../components/Navbar";
import FoodTabs from "../components/Food Tabs";


const HomeLayout=(props)=>{
    return<>
    <div className="lg:px-40"><Navbar/></div>
    <div className="border-b"><FoodTabs/></div>
    
     {props.children}
   
    </>
}
export default HomeLayout;