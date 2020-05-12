const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/team')
const auth = require("../middleware/auth");
const {grantAccess} = require("../controllers/permissionController")


// link all the team controller files to their respective routes
router.get('/',auth,grantAccess('readAny','team'),teamsController.findAll);
router.get('/:id',auth,grantAccess('readAny','team'),teamsController.findOne);
router.post('/',auth,grantAccess('createAny','team'),teamsController.insert);
router.patch('/:id',auth,grantAccess('updateAny','team'),teamsController.update)
router.delete('/:id',auth,grantAccess('deleteAny','team'),teamsController.delete);

// export the router object for other files to access
module.exports = router;