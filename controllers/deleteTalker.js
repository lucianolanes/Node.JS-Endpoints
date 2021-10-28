const { readFile, writeFile } = require('../service/utilities');

module.exports = async (req, res) => {
  const { id } = req.params;
  const file = await readFile();
  const getOthers = file.filter((t) => t.id !== parseInt(id, 10));

  await writeFile(getOthers);
  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};