"use strict";

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3005;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')

const FileStore = require('session-file-store')(session);
const app = express();
const secret = 'secret string to hash'; 

const v1 = require('./routes/v1');
const v2 = require('./routes/v2');
const data = require('./routes/data');

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));

app.use(express.static('front'));
app.use(bodyParser.json());
app.use(cookieParser(secret));
app.use(session({
  store: new FileStore({}),
  secret: secret,
  resave: true,
  saveUninitialized: true,
  cookie: {},
}));



app.use('/api/v1', v1);
app.use('/api/v2', v2) 
const start = async () => {
  try {

    await mongoose.connect('mongodb+srv://oksana:29051985s@cluster0.sgt5odx.mongodb.net/?retryWrites=true&w=majority')
      app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
      });
  } catch (e) { console.log(e); }
}
start();
module.exports = app;

