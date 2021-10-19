import React ,{useState,useEffect}from 'react';
import { useDispatch,useSelector } from 'react-redux';


// components
import MenuCollection from '../../components/Restaurant/MenuCollection';

// actions
import { getImage } from '../../Redux/Reducer/Image/image.action';


const MenuPage = (props) => {
   
   const [menus, setMenus] =useState([])
   const dispatch = useDispatch();

  const reduxState = useSelector((globalState)=>globalState.restaurant.selectedRestaurant.restaurant)

  useEffect(()=>{
    if(reduxState){
      dispatch(getImage(reduxState?.menuImages)).then((data)=>{ 
      const image =[];
      data.payload.image.image.map(({location})=>image.push(location))
      setMenus(image)}
      )
    }
  },[])
  console.log({menu:menus.length})
    return (
        <>
          <div className="flex flex-wrap items-center gap-3 px-2 lg:px-52 mb-8">
          {/* {menus.map((menu)=>(
            <MenuCollection image={menus} pages={menus.length}/>
         ))} */}
         <MenuCollection images={menus} pages={menus.length} menuTitle="Menu"/>
  
          </div>
    </>
    )
}

export default MenuPage

