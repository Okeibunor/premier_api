'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('fixtures', [{
      home_team: "Liverpool",
      away_team: "Chelsea",
      home_score: 3,
      away_score: 2,
      match_time: new Date(),
      finished: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('fixtures', null, {});
  }
};
