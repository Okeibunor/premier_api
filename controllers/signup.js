const express = require('express');
const bcrypt = require('bcrypt');
const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
module.exports = (req,res)=>{
  _id = uuidv4({
    random:Number[16]
  }),
  email = req.body.email;
  password = req.body.password;
}