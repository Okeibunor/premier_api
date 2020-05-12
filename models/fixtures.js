'use strict';
module.exports = (sequelize, DataTypes) => {
  const fixtures = sequelize.define('fixtures', {
    id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    home_team: DataTypes.STRING,
    away_team: DataTypes.STRING,
    home_score: DataTypes.INTEGER,
    away_score: DataTypes.INTEGER,
    match_time: DataTypes.DATE,
    finished: DataTypes.BOOLEAN
  }, {});
  
  fixtures.associate = function(models) {
    // associations can be defined here
  };
  return fixtures;
};