const express = require('express');
const talkerByID = require('../controllers/talkerByID');
const talkers = require('../controllers/talkers');
const addTalker = require('../controllers/addTalker');
const editTalker = require('../controllers/editTalker');
const deleteTalker = require('../controllers/deleteTalker');
const searchByName = require('../controllers/searchByName');
const {
  checkAge,
  checkName,
  checkRate,
  checkTalk,
  checkTalkerID,
  checkToken,
  checkWatchedAt,
} = require('../middlewares/ValidationMiddlewares');

const router = express.Router();

router.get('/', talkers);

router.get('/search', checkToken, searchByName);

router.get('/:id', checkTalkerID, talkerByID);

router.use('/', checkToken);

router.delete('/:id', deleteTalker);

router.use('/', checkName, checkAge, checkTalk, checkRate, checkWatchedAt);

router.post('/', addTalker);

router.put('/:id', editTalker);

module.exports = router;