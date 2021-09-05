import React ,{useState}from 'react';

// components
import MenuCollection from '../../components/Restaurant/MenuCollection';

const MenuPage = (props) => {
   
   const [menus, setMenus] =useState(["","",""])
   
    return (
        <>
          <div className="flex flex-wrap items-center gap-3 px:2 lg:px-52">
          {menus.map((menu)=>(
            <MenuCollection menuTitle ="Foodmenu"
            pages="2"
            images={["https://b.zmtcdn.com/data/menus/852/19247852/70d8b5aa09a0fe71347c3983da946b01.jpg?",
            "https://b.zmtcdn.com/data/menus/852/19247852/a1bedce76437d20bc6ae363092f15c7b.jpg",
            
            ]}/>
         ))}

  
          </div>
    </>
    )
}

export default MenuPage

