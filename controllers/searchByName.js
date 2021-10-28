const { readFile } = require('../service/utilities');

module.exports = async (req, res) => {
  const { q } = req.query;
  const talkers = await readFile();
  if (!q) {
    return res.status(200).json(talkers);
  }
  
  const searchTalker = talkers.filter(({ name }) => (name.toLowerCase()).includes(q.toLowerCase()));
  return res.status(200).json(searchTalker);
};