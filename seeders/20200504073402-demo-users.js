'use strict';
const {v4:uuidv4} = require('uuid');
const hash = require('../controllers/bcrypt').hashPassword;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:uuidv4(),
        email: "favourokeibunor@gmail.com",
        password:hash("password"),
        role:"admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:uuidv4(),
        email: "emmaokeibunor@gmail.com",
        password:hash('secret'),
        role:"user",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
