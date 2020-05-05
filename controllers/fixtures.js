const Sequelize = require('../models/index').Sequelize
const sequelize = require('../models/index').sequelize
const Fixture = require('../models/fixtures')(sequelize,Sequelize);

module.exports = (req,res)=>{
  Fixture.findAll().then(result=>res.send(result)).catch(err=>res.send(err))
}