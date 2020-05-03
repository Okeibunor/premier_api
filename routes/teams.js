const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/team')
// link all the team controller files to their respective routes
router.get('/',teamsController.findAll);
router.get('/:id',teamsController.findOne);
router.post('/',teamsController.insert);
router.patch('/:id',teamsController.update)
router.delete('/:id',teamsController.delete);
// export the router object for other files to access
module.exports = router;