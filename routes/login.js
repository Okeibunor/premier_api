const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login')
// define login routes
router.post('/',loginController);
// export router
module.exports = router;