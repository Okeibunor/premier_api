// import all the necessary npm packages
const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const dotenv = require('dotenv').config()
const compression = require('compression')
const bodyParser = require('body-parser');

// import database configuration files and models
const db = require('./models/index').sequelize;
const Sequelize = require('./models/index').Sequelize;
const Team = require('./models/team');

// route handlers
const teamsRoute = require('./routes/teams');
const fixturesRoute = require('./routes/fixtures');

// initialize express application
const app = express()
app.use(helmet())
app.use(compression())

// configure body Parser middleware to work appropriately
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routing middleware
app.use('/teams',teamsRoute);
app.use('/fixtures',fixturesRoute);

// setting port and starting server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT,()=>{console.log(`App running on port ${PORT}`)});
