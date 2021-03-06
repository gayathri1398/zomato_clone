import React,{useState,useEffect} from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {TiArrowSortedDown} from 'react-icons/ti';
import {BsSearch} from 'react-icons/bs';
import { useDispatch,useSelector } from 'react-redux';
import gravatar from 'gravatar';



// components
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

// actions
import { signOut } from '../../Redux/Reducer/Auth/auth.action';

const Navsm=({SignIn,SignUp})=>{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore)=> globalStore.user.user)     //1.user.user= rootreducer(user),reducer(user)
  
    const SignOutHandler =()=> dispatch(signOut());
   
    return<>
     <div className="flex items-center justify-between px-3 bg-white shadow-md ">
     <div className="w-24 m-4 ">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
        alt="zomato logo"
        className="w-full h-full"/>
    </div>
    <div className="flex items-center gap-3 relative">
        <button className=" px-2 py-1 bg-zomato-400 rounded-full text-white text-sm">Use App</button>
       {
           reduxState?.user?.fullname? (
               <>
                <div className="border border-grey-300 rounded-full p-2 text-zomato-400 w-12 h-12" 
            onClick={()=>setIsDropDownOpen((prev)=>!prev)}>
                <img src={gravatar.url("gayugayathri1309@gmail.com")}   
                alt={reduxState?.user?.email}
                className="w-full h-full object-cover rounded-full"  />
            </div>
           {
               isDropDownOpen && (
                <div className="flex flex-col bg-white shadow-lg absolute w-24 top-12 -right-2">
                <button className="text-black hover:text-zomato-400" onClick={SignOutHandler}>Sign Out</button>
               
            </div>
               )
           }
               
               </>
           ):
           (
               <>
                 <span className="border border-grey-300 rounded-full p-2 text-zomato-400" 
            onClick={()=>setIsDropDownOpen((prev)=>!prev)}><FaUserAlt/></span>
           {
               isDropDownOpen && (
                <div className="flex flex-col bg-white shadow-lg absolute w-24 top-12 -right-2">
                <button className="text-black hover:text-zomato-400" onClick={SignIn}>Sign In</button>
                <button className="text-black hover:text-zomato-400" onClick={SignUp}>Sign Up</button>
            </div>
               )
           }</>
           )
       }
    </div>
     </div>
    </>
};

const Navlg=({SignIn,SignUp})=>{
   const [dropDownOpen, setIsDropDownOpen] = useState(false);
   const dispatch = useDispatch();
    const dropdown =()=> setIsDropDownOpen((prev)=> !prev);

   
    const reduxState =useSelector((globalstore)=> globalstore.user.user)
    
    const SignOutHandler =()=> dispatch(signOut())
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
    {
       reduxState?.user?.fullname? (
           <>
           <div className="border border-grey-300 rounded-full p-2 text-zomato-400 w-16 h-16 relative">
               <img src={gravatar.url("gayugayathri1309@gmail.com")}     // general: reduxState?.user?.email
               alt={reduxState?.user?.email}
               className="w-full h-full object-cover rounded-full"
               onClick={dropdown} />
         
           {
               dropDownOpen &&(
                <button className="text-gray-500 hover:text-zomato-400 absolute w-28 -left-8 top-16 text-lg" onClick={SignOutHandler}>Sign Out</button>
               )
           }
             </div>
           </>
       ):
       (
           <>
           <div className="flex text-gray-400 gap-8 w-1/5 text-xl">
       <button className="text-gray hover:text-gray-500" onClick={SignIn}>Log in</button>
       <button className="text-gray hover:text-gray-500" onClick={SignUp}>Sign up</button>
    </div></>
       )
    }
    </div>
     </div>
    </>
};


const Navbar = () => {
    const [isOpenSignIn,setIsOpenSignIn] = useState(false);
    const [isOpenSignup,setIsOpenSignup] = useState(false);

    // functions
    const openSignIn=()=>setIsOpenSignIn(true)
    const openSignup =()=>setIsOpenSignup(true)
    return (
        <>
    <SignIn isOpen={isOpenSignIn}  setIsOpen={setIsOpenSignIn} />
    <SignUp isOpen={isOpenSignup} setIsOpen={setIsOpenSignup}/>
        <nav > 
            <div className="block lg:hidden"><Navsm SignIn={openSignIn} SignUp={openSignup} /> </div>
            <div className="hidden lg:block"><Navlg SignIn={openSignIn} SignUp={openSignup} /></div>
        </nav>
        </>
    ) 
};

export default Navbar;
