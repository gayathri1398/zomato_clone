
import React, {useState}from 'react';
import {HiMenu} from 'react-icons/hi';
import {MdClose} from 'react-icons/md'

// components
import MenuListContainer from './MenuListContainer';

const FloatMenuButton = () => {
    const [isClicked,setIsClicked] = useState(false)

    const toggleMenu =()=> {
      
        setIsClicked(setIsClicked.prev = !setIsClicked.prev);
    
    }
    

    return (
        <div className="md:hidden flex flex-col items-end">
          {
              isClicked && (
                  <div className="bg-white overflow-y-scroll h-48 p-2 w-56">
                      <MenuListContainer/>
                  </div>
              )
          }

            <button className="bg-gray-700 text-white px-2 py-1 rounded-full flex items-center gap-1 " onClick={toggleMenu}>
              {isClicked ? <MdClose/>:<HiMenu/> } Menu</button>
        </div>
    )
}

export default FloatMenuButton
