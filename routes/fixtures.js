const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('view all fixtures');
})

router.get('/:id',(req,res)=>{
  res.send(`Get fixture with id:${req.params.id}`);
})

router.post('/',(req,res)=>{
  res.send('add new fixture')
})

router.patch('/:id',(req,res)=>{
  res.send(`edit fixture with id: ${req.params.id}`)
})

router.delete('/:id',()=>{
  res.send(`delete fixture with id: ${req.params.id}`);
});

module.exports = router;