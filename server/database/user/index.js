import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    fullname: { type:String, required:true },
    email: {type:String, required:true },
    password: String,
    address: [{detail:{type:String}, for:{type:String}}],
    phoneNumber: [{type:Number}]
},
{
    timestamps: true,
});  
UserSchema.methods.generateJwtToken = function(){                       //methods is used here because only afterbthe user object is created the token must be generated
    return jwt.sign({user: this._id.toString()}, "ZomatoAPP");             // but statics can be used directly in the model
}


UserSchema.statics.findByEmailAndPhone = async({email, phoneNumber})=>{  
     // check whether email exists                                        //WP-7

    const checkUserByEmail  =  await UserModel.findOne({email});
    const checkUserByPhone  =  await UserModel.findOne({phoneNumber});

    if (checkUserByEmail || checkUserByPhone){
       throw new Error ("User Already Exists...!")
    };
    return false;
};

UserSchema.statics.findByEmailAndPassword = async({email,password})=>{
    // check the email
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User does not Exists!");

    // compare password
  const doesPasswordMatch = await bcrypt.compare(password, user.password );
  if(!doesPasswordMatch) throw new Error ("Invalid Password!");

  return user;
};

UserSchema.pre("save", function(next){                //WP-9, WP-10
    const user = this;

      // only hash the password if it has been modified (or is new)
    if (!user.isModified("password"))
      return next();
    
    // generate bcrypt salt
   bcrypt.genSalt(8, (error, salt)=>{
       if(error) return next(error);


    //  hash password
    bcrypt.hash(user.password, salt, (error,hash)=>{
        if (error) return next(error);

        // assigning hashed password
        user.password = hash;
        return next();
      });

   });
});

export const UserModel = mongoose.model("Users", UserSchema);
