import React,{useState} from 'react'
import ReactStars from 'react-rating-stars-component';

// components
import ReviewModal from './ReviewModal';


const AddReview = () => {
    let [isOpen, setIsOpen] = useState(false)

    const reviewModal = ()=>{
        if (!localStorage.zomatoUser){
            return alert("Please Sign In to write a review!");
            setIsOpen( !isOpen)
        }
    }
    return (
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="w-full h-48 bg-white shadow-lg pl-3 pt-2 sticky top-2">
        <h1 className="text-xl">Rate your experience for</h1>
        <div className="flex items-center gap-3 my-2">
        <div className="flex items-center gap-2">
            <input type="radio" name="Dining" id="dining"  />
            <label htmlFor="dining" className="text-xl">Dining</label>
        </div>
        <div className="flex items-center gap-2">
            <input type="radio" name="Dining" id="delivery"  />
            <label htmlFor="delivery" className="text-xl">Delivery</label>
        </div>
        </div>

        <ReactStars count={5} value={3} size={24}/>
      
        <button className="text-zomato-400 text-lg mt-3 " onClick={reviewModal}>Write a Review</button>
    </div>
    </>
    )
}

export default AddReview
