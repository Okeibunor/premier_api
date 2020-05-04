const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
module.exports = (req,res)=>{
  _id = req.body.id;
  email = req.body.email;
  password = req.body.password;
}