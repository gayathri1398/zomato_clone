import React,{useState,useCallback} from 'react';
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotoCollection from '../../components/Restaurant/PhotoCollection';


const PhotosPage = (props) => {
   
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen,setIsviewerOpen] = useState(false)
    
    // const openImageViewer = ()=> setIsviewerOpen (!isViewerOpen);  // or const openImageViewer = ()=> setIsviewerOpen (true); 
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsviewerOpen(true);
      }, []);
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsviewerOpen(false);
      };
    // const closeImageViewer=()=>setIsviewerOpen(false);
    
    const images = ["https://b.zmtcdn.com/data/pictures/chains/2/18433742/86218d48be38d5cfc5f0cb8f28699b47.jpg?",
    "https://b.zmtcdn.com/data/pictures/chains/2/18433742/86218d48be38d5cfc5f0cb8f28699b47.jpg?",
    "https://b.zmtcdn.com/data/pictures/chains/2/18433742/d4e1d766b9cd0ceb89e2abe21c144228.jpg?",
    "https://b.zmtcdn.com/data/pictures/chains/2/18433742/9b5159b5eee90f3a24e0ab162f110c96_featured_v2.jpg?"]

   
   
    return (
        <>
   {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
       
        <div className=" mt-4 lg:px-52 flex gap-3 "  >
        {images.map((image,index)=>(
            <PhotoCollection 
            image={image}
            openImageViewer={()=>openImageViewer(index)}
            />
            ))}
        </div>
        </>
    )
}

export default PhotosPage
