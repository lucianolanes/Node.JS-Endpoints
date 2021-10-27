const readFile = require('../service/utilities');

async function checkTalkerID(req, res, next) {
  const { id } = req.params;
  const talkers = await readFile();
  const getIDs = await talkers.some((t) => t.id === parseInt(id, 10));

  if (!getIDs) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
}

module.exports = checkTalkerID;