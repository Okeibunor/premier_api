// import all the necessary npm packages
const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const dotenv = require('dotenv').config()
const compression = require('compression')
const knex = require('knex');
// route handlers
const teamsRoute = require('./routes/teams');
const fixturesRoute = require('./routes/fixtures');
const homeRoute = require('./routes/home')

// initialize express application
const app = express()
app.use(helmet())
app.use(compression())

// routing middleware
app.use('/teams',teamsRoute);
app.use('/fixtures',fixturesRoute)
app.use(homeRoute);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT,()=>{console.log(`App running on port ${PORT}`)});
