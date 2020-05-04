const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const hash = require("./bcrypt").hashPassword;
const User = require('../models/user');
const db = require('../models/index').sequelize

module.exports = async(req,res)=>{
  // define signup parameters
  const user_id = uuidv4();
  const user_email = req.body.email;
  const user_password = hash(req.body.password,10);
  // generate jwt token for user
  const token = jwt.sign({user_id,user_email},process.env.JWT_SECRET);
  // save user data to database after creating transaction
  const t = await db.transaction();
    try{
      const user = await User.create({
        id: user_id,
        email:user_email,
        password:user_password
      },{transaction:t})
      .then(res.status(201).json({"message":"New User successfully created"}))
      .catch(err => res.json(err));
      // commit transaction
      await t.commit();
    }catch(error){
      // rollback transaction if there's an error
      await t.rollback();
    }
}



