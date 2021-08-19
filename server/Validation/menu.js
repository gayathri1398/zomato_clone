import joi from "joi";

export const ValidateMenuId=(foodId)=>{
    const Schema = joi.object({
        items:joi.string()
   
    });
    return Schema.validateAsync(foodId);
};

