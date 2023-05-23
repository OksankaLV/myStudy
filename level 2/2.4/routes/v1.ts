//route module

const express = require('express');
let router = express.Router();
//import session from 'express-session';

//const bodyParser = require('body-parser');
//const FileStore = require('session-file-store')(session);
const controller = require('../controllers/controller');
const controllerItems = require('../controllers/controllerItems');

import fs from 'fs';

router.route('/items')
  .get(controllerItems.getItems)
 
  .post(controllerItems.addTask)
  .put(controllerItems.putItems)
  .delete(controllerItems.deleteItems);


router.route('/logout')
  .post(controller.logout);
router.route('/login')
  .post(controller.login);
router.route('/register')
  .post(controller.register);

module.exports = router;

