import React ,{useState} from 'react';


const PhotoCollection = (props) => {
  
    return (
        <>
        
       <div className="flex items-center flex wrap gap-3"   >
      
          <div className="w-48 h-44 rounded-lg"  >
          <img src={props.image}
          alt="foodphoto" 
          className="w-full h-full rounded-lg"
          onClick={props.openImageViewer}
         />
         
      </div>
  

       </div>
      
  
    </>
    )
}

export default PhotoCollection
