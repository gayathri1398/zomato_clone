import React from "react";
import FoodTabs from "../components/Food Tabs";

// Components
import Navbar from "../components/Navbar";


const HomeLayout=(props)=>{
    return<>
    <div className="lg:px-40"><Navbar/></div>
    <div className="border-b"><FoodTabs/></div>
 
     {props.children}
   
    </>
}
export default HomeLayout;