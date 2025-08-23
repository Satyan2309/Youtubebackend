import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'

export const verifyJWT = asyncHandler(async(req, _,next) =>{
   try {
   const authHeader = req.headers.authorization || req.headers.Authorization;

    let token;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    } else if (req.cookies?.accessToken) {
        token = req.cookies.accessToken;
    }

     if(!token){
         throw new ApiError(401,"Unauthorized request")
     }
    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
 
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
     if(!user){

        //
         throw new ApiError(401,'Invalid Access Token')
     }
     req.user = user;
     next()
   } catch (error) {
    throw new ApiError(401,error?.message ||"Invalid access token ")
   }
})