import React ,{useState}from 'react';

import ImageViewer from 'react-simple-image-viewer';

const MenuPage = (props) => {
   
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen,setIsviewerOpen] = useState(false)
    
    const openImageViewer = ()=> setIsviewerOpen (!isViewerOpen);  // or const openImageViewer = ()=> setIsviewerOpen (true); 
    const closeImageViewer=()=>setIsviewerOpen(false);

    const images = ["https://b.zmtcdn.com/data/menus/852/19247852/70d8b5aa09a0fe71347c3983da946b01.jpg?",
    "https://b.zmtcdn.com/data/menus/852/19247852/a1bedce76437d20bc6ae363092f15c7b.jpg",
    ]

    return (
        <>
         {isViewerOpen && (
        <ImageViewer
          src={images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
       <div className="flex justify-between items-start my-4 px-2 lg:px-52" onClick={openImageViewer}>
       <div className="flex flex-col gap-2">
            <h1 className="text-xl ">Menu</h1>
             
                  <div className="w-36 h-36 rounded-lg overflow-hidden md:w-60 md:h-60 ">
                  <img src={images}
                   alt="menucollection"
                   className="w-full h-full object-cover rounded-lg transform hover:scale-110 trnsition duration-500 ease-out" />
                </div>
              
              <p className="text-base">Menu</p>
                 <p className="text-sm text-gray-400">2pages</p>
         </div> 
          
           
       </div>
    </>
    )
}

export default MenuPage

