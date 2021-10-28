const fs = require('fs/promises');

async function readFile() {
  try {
    const result = await fs.readFile('talker.json', 'utf8');
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
  }
}

async function writeFile(newTalker) {
  try {
    return fs.writeFile('talker.json', JSON.stringify(newTalker));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { readFile, writeFile };
