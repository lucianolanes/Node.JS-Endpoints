const express = require('express');
const bodyParser = require('body-parser');
const talkersRouter = require('./router/talkersRouter');
const checkEmail = require('./middlewares/checkEmail');
const checkPassword = require('./middlewares/checkPassword');
const generateToken = require('./controllers/generateToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', checkEmail, checkPassword, generateToken);

app.use('/talker', talkersRouter);

app.listen(PORT, () => {
  console.log('Online');
});
