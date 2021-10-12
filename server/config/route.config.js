
import JwtPassport from "passport-jwt";

// models
import { UserModel } from "../database/allmodels";


// Strategy
const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

// options
const options = {
    jwtFromRequest :  ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "ZomatoAPP"
};

export default (passport)=>{
  passport.use(
      new JWTStrategy(options, async(jwt__payload, done)=>{
          try {
              const doesUserExists = await UserModel.findById(jwt__payload.user);
              if (!doesUserExists) return done(null, false);

              return done(null, doesUserExists);
          } catch (error) {
             throw new Error(error) 
          };
      })
  )
};