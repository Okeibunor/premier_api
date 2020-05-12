'use strict';

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
  },
  role:{
    type:Sequelize.STRING,
    default:"user"
  }
});

module.exports = User;
