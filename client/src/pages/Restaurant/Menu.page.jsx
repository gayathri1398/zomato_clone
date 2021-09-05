import React ,{useState}from 'react';

// components
import MenuCollection from '../../components/Restaurant/MenuCollection';

const MenuPage = (props) => {
   
   const [menus, setMenus] =useState(["","",""])
   
    return (
        <>
          <div className="flex flex-wrap items-center gap-3 px-2 lg:px-52">
          {menus.map((menu)=>(
            <MenuCollection {...menu}/>
         ))}

  
          </div>
    </>
    )
}

export default MenuPage

