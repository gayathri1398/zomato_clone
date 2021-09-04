import React ,{useState}from 'react';
import {IoMdArrowDropright} from 'react-icons/io';
import { Link ,useParams} from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const {id} = useParams();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen,setIsviewerOpen] = useState(false)
    
    const openImageViewer = ()=> setIsviewerOpen (!isViewerOpen);  // or const openImageViewer = ()=> setIsviewerOpen (true); 
    const closeImageViewer=()=>setIsviewerOpen(false);
    return (
        <>
         {isViewerOpen && (
        <ImageViewer
          src={props.images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
       <div className="flex justify-between items-start my-4" onClick={openImageViewer}>
       <div className="flex flex-col gap-2">
            <h1 className="text-xl ">Menu</h1>
              <div className="w-36 h-36 rounded-lg overflow-hidden md:w-60 md:h-60 ">
                <img src={props.images}
                 alt="menucollection"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 trnsition duration-500 ease-out" />
              </div>
              <p className="text-base">Menu</p>
                 <p className="text-sm text-gray-400">2pages</p>
         </div> 
          <Link to={`/restaurant/${id}/menu`}>
          <p className="text-sm flex gap-1 items-center text-zomato-400 pr-4">See all menus
            <IoMdArrowDropright className="text-xl"/>
            </p></Link>
           
       </div>
    </>
    )
}

export default MenuCollection
