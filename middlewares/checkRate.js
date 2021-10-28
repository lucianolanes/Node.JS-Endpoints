function checkRate(req, res, next) {
  const { rate } = req.body.talk;

  // Number.isFinite visto no link shorturl.at/nCJSZ
  if (!Number.isFinite(rate) || rate !== parseInt(rate, 10) || rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  
  next();
}

module.exports = checkRate;