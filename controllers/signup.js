const {v4:uuidv4} = require('uuid');
const hash = require("./bcrypt").hashPassword;
const User = require('../models/user');

module.exports = async(req,res)=>{
  // define signup parameters
  user_email = req.body.email;
  user_password = hash(req.body.password);
  user_id = uuidv4();
  User.findAll({
    where:{
      email:user_email
    }}).then(result=>{
    if(result.length >= 1){
      res.json({"message":'Mail already has account, Login instead'})
    }else{
      addUser().then(res.json({message:"Account successfully created"}))
    }
    });  
  }

addUser = async()=>{
  const db = require('../models/index').sequelize
  // save user data to database after creating transaction
  const t = await db.transaction();
  try{
    const user = await User.create({
      id: user_id,
      email:user_email,
      password: user_password
    },{transaction:t})
    .then(console.log({"message":"New User successfully created"}))
    .catch(err => console.log(err));
    // commit transaction
    await t.commit();
  }
  catch(error){
    // rollback transaction if there's an error
    await t.rollback();
    }     
  }
      



