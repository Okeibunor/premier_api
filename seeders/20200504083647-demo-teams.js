'use strict';
const {v4:uuidv4} = require('uuid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [
      { 
        id:uuidv4(),
        name: "Liverpool",
        abbreviation:"LIV",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:uuidv4(),
        name: "Chelsea",
        abbreviation:"CHE",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
