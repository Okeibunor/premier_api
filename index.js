// import all the necessary npm packages
const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const dotenv = require('dotenv').config()
const compression = require('compression')

// route handlers
const teamsRoute = require('./routes/teams');
const fixturesRoute = require('./routes/fixtures');

// initialize express application
const app = express()
app.use(helmet())
app.use(compression())

// routing middleware
app.use('/teams',teamsRoute);
app.use('/fixtures',fixturesRoute)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`App running on port ${PORT}`)})