import React from 'react';
import ReactStars from "react-rating-stars-component";
import {BsStar,BsStarHalf,BsStarFill} from 'react-icons/bs';

const NutritionCard = () => {
    return (
        <>
        <div className="w-full lg:w-1/3 rounded-lg bg-white shadow-lg">
        <div className="w-full h-48 bg-blue-100 rounded-t-lg" >
            <img src="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
             alt="medicine" 
             className="w-full h-full object-contain"/>
        </div>
        <div className="p-3">
        <div className="flex items-center py-1 ">
                <div className="w-6 h-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVHC9kLjloVrYTd1PvyJQS6i7wPbPEcLTTg&usqp=CAU" 
                    alt="veg icon"
                    className="w-full h-full"/>
                </div>
                <div className="">
                <ReactStars
                count={5}
                isHalf={true}
                // onChange={ratingChanged}
                value={3.5}
                size={24}
                emptyIcon={<BsStar/>}
                halfIcon={<BsStarHalf/>}
                fullIcon={<BsStarFill/>}
                activeColor="#ffd700"
                />
                </div>
                <span className="text-gray-500">48</span>
            
         </div>
         <h1 className="text-lg font-medium">Sleep - Timed Release Melatonin</h1>
         <p className="text-gray-500">An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher.</p>
         <hr className="my-2"/>
         <s className="text-gray-500">₹500</s><strong className="pl-1">₹200</strong>
         <p className="text-gray-500">monthly pack- 30 tablets</p>
        </div>
        </div>
       
        </>
    )
}

export default NutritionCard;
