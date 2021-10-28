const express = require('express');
const talkerByID = require('../controllers/talkerByID');
const talkers = require('../controllers/talkers');
const addTalker = require('../controllers/addTalker');
const checkAge = require('../middlewares/checkAge');
const checkName = require('../middlewares/checkName');
const checkRate = require('../middlewares/checkRate');
const checkTalk = require('../middlewares/checkTalk');
const checkTalkerID = require('../middlewares/checkTalkerID');
const checkToken = require('../middlewares/checkToken');
const checkWatchedAt = require('../middlewares/checkWatchedAt');

const router = express.Router();

router.get('/', talkers);

router.get('/:id', checkTalkerID, talkerByID);

router.post('/', checkToken, checkName, checkAge, checkTalk, checkRate, checkWatchedAt, addTalker);

module.exports = router;