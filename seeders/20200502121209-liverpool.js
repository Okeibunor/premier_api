'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', [
      {
        name: 'Liverpool',
        abbreviation: 'LIV',
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name: 'Watford',
        abbreviation: 'WAT',
        createdAt: new Date(),
        updatedAt:new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
