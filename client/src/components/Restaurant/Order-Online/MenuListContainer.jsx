import React,{useState} from 'react';

// components
import MenuCategory from './MenuCategory'


const MenuListContainer = (props) => {


    
    return (
        <div className="flex flex-col gap-2  border-r">
             <MenuCategory name={props.name}
              items ={props.items}
              onClickHandler={props.onClickHandler}
              isActive = {props.isSelected===props.name}
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
