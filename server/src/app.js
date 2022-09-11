/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const dbConnectCheck = require('../db/dbConnectionCheck');
const itemsRoute = require('./routes/itemsRoute');

const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'your coockie name', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'your key', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000', // адрес сервера React
};
app.use(cors(corsOptions));
app.use(session(sessionConfig));
app.use('/items', itemsRoute);

app.listen(PORT, async () => {
  try {
    await dbConnectCheck();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
