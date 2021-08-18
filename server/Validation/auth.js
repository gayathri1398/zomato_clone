import Joi from "joi";

export const ValidateSignup = (userData)=>{
    const Schema = Joi.object({
        fullname: Joi.string().required().min(6),
        email: Joi.string().required().email(),
        password: Joi.string().min(5),
        address: Joi.array().items(Joi.object({detail:Joi.string(),for:Joi.string()})),
        phoneNumber: Joi.number()
    });
    return Schema.validateAsync(userData);
};

export const ValidateSignin =(userData)=>{
    const Schema = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().required()
    });
    return Schema.validateAsync(userData);

};