const express = require('express');
const router = express.Router();
const db = require('../models/index').sequelize;
const Sequelize = require('../models/index').Sequelize;
const Team = require('../models/team');


router.get('/',(req,res)=>{
  Team.findAll().then(team=>res.send (team)).catch(err=>res.send(err));
})

router.get('/:id',(req,res)=>{
  res.send(`Get team with id:${req.params.id}`);
})

router.post('/',(req,res)=>{
  res.send('add new team')
})

router.patch('/:id',(req,res)=>{
  res.send('edit team with id')
})

router.delete('/:id',()=>{
  res.send('delete team with id');
});

module.exports = router;