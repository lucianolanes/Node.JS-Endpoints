const { readFile, writeFile } = require('../service/utilities');

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  const file = await readFile();
  const lastId = file[file.length - 1].id;
  const newTalker = {
    id: lastId + 1,
    name,
    age,
    talk,
  };
  await writeFile([...file, newTalker]);
  return res.status(201).json(newTalker);
};