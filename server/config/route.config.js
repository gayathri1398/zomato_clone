
import JwtPassport from "passport-jwt";

// models
import { UserModel } from "../database/allmodels";


// Strategy
const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

// options
const options = {
    jwtFromRequest :  ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "ZomatoAPP"
};

export default (passport)=>{
  passport.use(
      new JwtStrategy(options, async(jwt__payload, done)=>{
          try {
              const doestUserExists = await UserModel.findById(jwt__payload.user);
              if (!doestUserExists) return (null, false);

              return(done, doestUserExists);
          } catch (error) {
             throw Error(error) 
          };
      })
  )
};