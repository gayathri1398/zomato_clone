import React,{useState} from 'react';

// components
import MenuCategory from './MenuCategory'


const MenuListContainer = (props) => {

   const [isSelected,setIsSelected] = useState() 

    const onClickHandler=(e)=>{
       setIsSelected (e.target.id);
    }
    return (
        <div className="flex flex-col gap-2  border-r">
             <MenuCategory {...props}
              
              onClickHandler={onClickHandler}
              isActive = {isSelected===props.name}
              />
               
                {/* <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              /> */}
              
        </div>
    )
}
// h-screen
export default MenuListContainer
