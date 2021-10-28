const { readFile, writeFile } = require('../service/utilities');

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const file = await readFile();
  const getOthers = file.filter((t) => t.id !== parseInt(id, 10));
  const newTalker = {
    id: parseInt(id, 10),
    name,
    age,
    talk,
  };
  await writeFile([...getOthers, newTalker]);
  return res.status(200).json(newTalker);
};