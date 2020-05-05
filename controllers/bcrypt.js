const bcrypt = require('bcrypt');

module.exports = {
  hashPassword : (password)=>{
    return bcrypt.hashSync(password,10)
  },
  comparePassword: (user_value,stored_value)=>{
    return bcrypt.compareSync(user_value,stored_value)
  } 
}