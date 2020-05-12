const {roles} = require('./roleController')
const jwt = require('jsonwebtoken')

exports.grantAccess = (action,resource)=>{
  return async (req,res,next)=>{
    try{
      const token = req.headers.authorization
      const role = jwt.decode(token).role
      const permission = roles().can(role)[action](resource);
      if(permission.granted){
        next()
      }
      else{
        return res.status(403).json({
          error:"Permission denied"
        })
      }
    } 
    catch (error){
      next(error)
    }
  } 
}
