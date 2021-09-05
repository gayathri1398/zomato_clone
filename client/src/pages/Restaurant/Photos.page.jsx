
import React ,{useState}from 'react';
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotoCollection from '../../components/Restaurant/PhotoCollection';

const PhotoPage = (props) => {
   
   const [photos, setPhotos] =useState(["https://b.zmtcdn.com/data/pictures/8/19005048/1194a6dc791af6d1f36d4f8bc1c381e6.jpg?",
  "https://b.zmtcdn.com/data/pictures/8/19005048/4d083a0c12a30ccc6b2e0bc019c11f4c.jpg?","https://b.zmtcdn.com/data/pictures/8/19005048/1194a6dc791af6d1f36d4f8bc1c381e6.jpg?",
  "https://b.zmtcdn.com/data/pictures/8/19005048/4d083a0c12a30ccc6b2e0bc019c11f4c.jpg?"]);
   
   const [currentImage, setCurrentImage] = useState(0);
   const [isViewerOpen, setIsViewerOpen] = useState(false);
   
   const openImageViewer =()=>setIsViewerOpen(true);
   const closeImageViewer =()=>setIsViewerOpen(false);

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
          <div className="flex flex-wrap items-center gap-3 px-2 mt-4 lg:px-52 " >
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

