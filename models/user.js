// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     id: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };


const db = require('./index').sequelize;
const Sequelize = require('./index').Sequelize;
const User = db.define('User',{
  id:{
    type:Sequelize.STRING,
    primaryKey:true
  },
  email:{
    type:Sequelize.STRING
  },
  password:{
    type:Sequelize.STRING
  }
});

module.exports = User;
