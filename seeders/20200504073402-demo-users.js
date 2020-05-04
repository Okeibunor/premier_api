'use strict';
const {v4:uuidv4} = require('uuid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:uuidv4(),
        email: "favourokeibunor@gmail.com",
        password:"password",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:uuidv4(),
        email: "emmaokeibunor@gmail.com",
        password:"secret",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
