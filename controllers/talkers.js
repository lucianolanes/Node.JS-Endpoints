const readFile = require('../service/utilities');

module.exports = async (_req, res) => {
  const talkers = await readFile();
  return res.status(200).json(talkers);
};