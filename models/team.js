'use strict';
const db = require('./index').sequelize;
const Sequelize = require('./index').Sequelize;
const team = db.define('Teams',{
  id:{
    type:Sequelize.STRING,
    primaryKey:true,
    null:false
  },
  name:Sequelize.STRING,
  abbreviation:Sequelize.STRING,
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE

},{});

module.exports = team;
