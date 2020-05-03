const express = require('express');
const db = require('../models/index').sequelize;
const Sequelize = require('../models/index').Sequelize;
const Team = require('../models/team');


module.exports = {
  findAll:(req,res)=>{
    Team.findAll().then(teams=>res.json(teams)).catch(err=>res.json(err));
  },
  findOne:(req,res)=>{
    Team.findAll({
      where:{
        id:req.params.id
      }
    })
    .then(team=>res.json(team))
    .catch(err=>res.json(err));
  },
  insert: async(req,res)=>{
    const t = await db.transaction();
    try{
      const team = await Team.create({
        name:req.body.name,
        abbreviation:req.body.abbreviation
      },{transaction:t})
      .then(res.status(201).json({"message":"New team successfully created"}))
      .catch(err => res.json(err));
      // commit transaction
      await t.commit();
    }catch(error){
      // rollback transaction if there's an error
      await t.rollback();
    }
  },
  update: async(req,res) => {
    await Team.update({name:req.body.name,abbreviation:req.body.abbreviation},{
      where:{
        id:req.params.id
      }
    })
    .then(res.status(202).json({"message":"Team successfully updated"}))
    .catch(err => res.json(err))
  },
  delete: async (req,res) => {
    await Team.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(res.status(200).json({"message":"Team successfully deleted"}))
    .catch(err => res.json(err))
  }
}

