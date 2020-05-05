'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fixtures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team: {
        type: Sequelize.STRING
      },
      away_team: {
        type: Sequelize.STRING
      },
      home_score: {
        type: Sequelize.INTEGER
      },
      away_score: {
        type: Sequelize.INTEGER
      },
      match_time: {
        type: Sequelize.DATE
      },
      finished: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fixtures');
  }
};