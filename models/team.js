'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const team = sequelize.define('team', {
//     name: DataTypes.STRING,
//     abbreviation: DataTypes.STRING
//   }, {});
  
//   team.associate = function(models) {
//     // associations can be defined here
//   };
//   return team;
// };
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
