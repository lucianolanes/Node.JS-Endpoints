function checkTalk(req, res, next) {
  const { watchedAt } = req.body.talk;

  // Regex para validar formato da data visto no link shorturl.at/hwDHU
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
  next();
}

module.exports = checkTalk;