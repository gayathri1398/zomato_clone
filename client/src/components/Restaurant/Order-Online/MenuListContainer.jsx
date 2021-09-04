import React,{useState} from 'react';

// components
import MenuCategory from './MenuCategory'


const MenuListContainer = () => {

   const [isSelected,setIsSelected] = useState() 

    const onClickHandler=(e)=>{
       setIsSelected (e.target.id);
    }
    return (
        <div className="flex flex-col gap-2 h-screen border-r">
             <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              />
                <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              />
                <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              />
              <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              />
                <MenuCategory name="Recommended"
              items={["",""]}
              onClickHandler={onClickHandler}
              isActive = {isSelected==="Recommended"}
              />
              
        </div>
    )
}

export default MenuListContainer
