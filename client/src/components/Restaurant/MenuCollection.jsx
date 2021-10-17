import React ,{useState}from 'react';

import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
   
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
            
              <div className="w-36 h-36 rounded-lg overflow-hidden md:w-60 md:h-60 ">
                <img src={props.images && props.images[0]}
                 alt="menucollection"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 trnsition duration-500 ease-out" />
              </div>
              <p className="text-base">{props.menuTitle}</p>
                 <p className="text-sm text-gray-400">{props.pages} pages</p>
         </div> 
         
       </div>
    </>
    )
}

export default MenuCollection
