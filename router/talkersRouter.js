const express = require('express');
const talkerByID = require('../controllers/talkerByID');
const talkers = require('../controllers/talkers');
const checkTalkerID = require('../middlewares/checkTalkerID');

const router = express.Router();

router.get('/', talkers);

router.use('/:id', checkTalkerID);

router.get('/:id', talkerByID);

module.exports = router;