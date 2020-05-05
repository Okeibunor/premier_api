const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = (req,res)=>{
  user_email = req.body.email,
  user_password = req.body.password

  User.findOne({
    where:{
      email:user_email
    }
  })
  .then(result=>{
    if(result == null){
      res.json({
        message:"Login Failed"
      })
    }else{
      bcrypt.compare(user_password,result.password,(error,response)=>{
        if(response){
          token = jwt.sign(result.email,process.env.JWT_SECRET,{
            expiresIn:"1h"
          })
          return res.status(200).json({
            response,
            token
          });
        }else{
          return res.status(401).json({
            message:"Login Failed"
          })
        }
      })
    }
  })
  .catch(err=>res.status(500).json({err}))
}