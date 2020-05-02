// 'use strict';
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
const db = require('../models/index').sequelize;
const Sequelize = require('../models/index').Sequelize;
const team = db.define('team',{
  name:{
    type:Sequelize.STRING
  },
  abbreviation:{
    type:Sequelize.STRING
  }
});

module.exports = team;
