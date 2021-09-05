import React  from 'react';


const PhotoCollection = (props) => {
  
    return (
        <>
      
      <div className=" rounded-lg w-36 h-36 md:w-48 h-44 overflow-hidden"
        onClick={props.openImageViewer} >
          <img src={props.image}
          alt="foodphoto" 
          className="w-full h-full rounded-lg object-fit transform hover:scale-110 transition duration-500 ease out"
         
         />
         
      </div>
    </>
    )
}

export default PhotoCollection
