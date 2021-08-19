import joi from "joi";


export const ValidateRestaurant =(city)=>{
    const Schema= joi.object({
        city:joi.string().required(),
    });
    return Schema.validateAsync(city);
} ;

export const ValidateSearchString =(searchString)=>{
    const Schema = joi.object({
        name:joi.string().required()
    });
    return Schema.validateAsync(searchString)

};