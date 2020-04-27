const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('view all teams');
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