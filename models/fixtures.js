const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://favour:ilove1998@localhost/leaguedb')
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;