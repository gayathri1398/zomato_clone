import React from 'react';



// components
import ReviewCard from '../../components/Restaurant/Reviews/ReviewCard';

import AddReview from '../../components/Restaurant/Reviews/AddReview';


const ReviewPage = () => {
    return (
        <>
       
        <div className="px-2 lg:px-52 flex flex-col md:flex-row my-2">
        
            <div>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/> 
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
            <aside className="hidden md:block w-5/12">
               <AddReview/>
            </aside>
        </div>
        </>
    )
}

export default ReviewPage
