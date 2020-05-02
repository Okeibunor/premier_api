'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};