const fs = require('fs/promises');

async function readFile() {
  try {
    const result = await fs.readFile('talker.json', 'utf8');
    return JSON.parse(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = readFile;
