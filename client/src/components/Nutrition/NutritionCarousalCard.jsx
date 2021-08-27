import React from 'react'

const NutritionCarousalCard = (props) => {
    return (
        <div className="w-full h-36 md:h-54 lg:h-72 mt-14 px-8">
        <img src={props.image}
        alt="nutrition"
        className="w-full h-full"/>
    </div>
    )
}

export default NutritionCarousalCard
