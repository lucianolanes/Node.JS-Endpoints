const { readFile } = require('../service/utilities');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();
  const getID = await talkers.find((t) => t.id === parseInt(id, 10));
  return res.status(200).json(getID);
};