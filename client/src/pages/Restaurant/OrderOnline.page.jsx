import React ,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {AiFillCompass} from 'react-icons/ai';
import {IoMdTime} from 'react-icons/io'

// components
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';
import FloatMenuButton from '../../components/Restaurant/Order-Online/FloatMenuButton';
import FoodList from '../../components/Restaurant/Order-Online/FoodList';

// actions
import { getFoodList } from '../../Redux/Reducer/Food/food.action';

const OrderOnlinepage = () => {
    const [menu,setMenu] = useState([]);
    const [isSelected,setIsSelected] = useState() ;    //we placed this from menulistcontainer bec it doesnt maintain any global state and everything was active when selected


    const onClickHandler=(e)=>{
      setIsSelected (e.target.id);
    }

    const reduxState = useSelector((globalStore)=>(globalStore.restaurant.selectedRestaurant.restaurant) );
    

    const dispatch = useDispatch();


    useEffect(()=>{
      reduxState &&
      dispatch(getFoodList(reduxState?.menu)).then((data)=>setMenu(data.payload.menus.menus) );
    },[reduxState]);

// setMenu(data.payload.menus.menus)
  console.log({state:menu})
   

   console.log({state:menu})
    return (
        <div className="px-2 w-full lg:px-52 flex">
          <aside className="hidden md:block w-1/4 h-screen">  
            {
              menu?.map((item)=>(
              <MenuListContainer {...item} key={item._id} onClickHandler={onClickHandler} isSelected={isSelected} />
              ))
            }
           
          </aside>
          <div >
          <FloatMenuButton/>
          </div>
          
          <div className="w-full md:w-4/5 pl-4 h-screen overflow-y-scroll">
              <h1 className="text-2xl font-semibold my-3 ">Order Online</h1>
             <div className="flex text-gray-500 text-sm"> 
                 <span className="flex items-center gap-1 border-r-2 border-gray-500 pr-2"><AiFillCompass/>Live track your order</span>
              <span className="flex items-center gap-1 pl-2"><IoMdTime/>45 min</span></div>
              
               <section>
            {menu?.map((item)=>(
                 <FoodList {...item} key={item._id}  />
                
            ))}   
           
             {/* {...item} key={item._id} 
             name={props.name} items={props.items} key={props._id}*/}
               </section>
          </div>
        </div>
    )
}

export default OrderOnlinepage;
