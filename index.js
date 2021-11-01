const express = require('express');
const bodyParser = require('body-parser');
const talkersRouter = require('./router/talkersRouter');
const generateToken = require('./controllers/generateToken');
const { checkEmail, checkPassword } = require('./middlewares/ValidationMiddlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', checkEmail, checkPassword, generateToken);

app.use('/talker', talkersRouter);

app.listen(PORT, () => {
  console.log('Online');
});
