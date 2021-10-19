
import React ,{useState,useEffect}from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useDispatch,useSelector } from 'react-redux';

// components
import PhotoCollection from '../../components/Restaurant/PhotoCollection';


// actions
import { getImage } from '../../Redux/Reducer/Image/image.action';



const PhotoPage = (props) => {
   
   const [photos, setPhotos] =useState([]);
   
   const [currentImage, setCurrentImage] = useState(0);
   const [isViewerOpen, setIsViewerOpen] = useState(false);
   
   const openImageViewer =()=>setIsViewerOpen(true);
   const closeImageViewer =()=>setIsViewerOpen(false);
   
   const dispatch = useDispatch();


   const reduxState = useSelector(globalState=> globalState.restaurant.selectedRestaurant.restaurant);

   useEffect(()=>{
    if(reduxState){
       dispatch(getImage(reduxState?.photos)).then(data=>{
         const images=[];
         data.payload.image.image.map(({location})=> images.push(location))
         setPhotos(images)})
    }
   },[reduxState])

   console.log({state:photos})

    return (
        <>
        
      {isViewerOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
          <div className="flex flex-wrap items-center gap-8 px-2 mt-4 lg:px-52 mb-16" >
          {photos.map((photo)=>(
            <PhotoCollection image={photo} 
            openImageViewer={openImageViewer}
            />
         ))}

  
          </div>
    </>
    )
}

export default PhotoPage

