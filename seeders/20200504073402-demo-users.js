'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:"user_1",
        email: "favourokeibunor@gmail.com",
        password:"password",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"user_2",
        email: "emmaokeibunor@gmail.com",
        password:"secret",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
