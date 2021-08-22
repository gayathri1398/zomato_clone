import React from "react";

// Components
import Navbar from "../components/Navbar";


const HomeLayout=(props)=>{
    return<>
    <div className="lg:px-40">
    <Navbar/>
    </div>
     {props.children}
   
    </>
}
export default HomeLayout;