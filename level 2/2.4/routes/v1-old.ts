//route module

const express = require('express');
let router = express.Router();
//import session from 'express-session';

const bodyParser = require('body-parser');
//const FileStore = require('session-file-store')(session);
const controller = require('../controllers/controller');
const controllerItems = require('../controllers/controllerItems');
let users = [
    { _id: 1587912698986,
        login: 'newLogin',
    password: '$2b$13$CW3SP.VCKI0NQFgu9plKQeXc3KugDB9hD/EB.nDgS79FQyxzBSDBW',
  
  },
];
//const users = require('./data').users;
//import user from './data'.users;
//let users: { login: string; password: string; }[] = [];
import fs from 'fs';

router.use(session({
    store: new FileStore({}),
    secret: 'secret string to hash',
    resave: true,
    saveUninitialized: true,
    cookie: {}
}));

let _items: any[] = [];
let ID = 0;

router.use(bodyParser.json());
// Home page route

router.route('/items') 
  .get((req: any,res: any) => {
    res.send(JSON.stringify({ items: _items }));
  })
  .post((req: any, res: any) => {
    let item = {
      id: ID = ID + 1,
      text: req.body.text,
      checked: false
    }
    _items.push(item);
    const data = JSON.stringify(_items);
    const fileName = 'saveFile.json';
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('Данные сохранены в файл');
    });
    res.json({ id: ID });
  })
 .put((req: any, res: any) => { 
  let index = _items.findIndex(item => item.id == req.body.id);
  _items[index].text = req.body.text;
  _items[index].checked = !req.body.checked;
  res.json({ ok : true });
 })
 .delete((req: any, res: any) => { 
  let index = _items.findIndex(item => item.id == req.body.id);
  _items.splice(index, 1);
  res.json({ ok : true });
});
/*
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
*/
//    -------------save in data.js-----------
router.route('/login')
  .post(async (req: any, res: any) => {
    let userMatch = users.find((user: { _id: number, login: string, password: string }) =>
      (req.body.login === user.login) || (req.body.pass === user.password));
    if (userMatch) {
      console.log('findUser')
      /*res.cookie('sessionID', ${req.sessionID})
            res.json({ ok: true })
          } else { 
             res
            .status(400)
            .send({ error: { code: 400, message: 'Email address already used' } });
          }
    }
  */
      res.json({ ok: true });
    }
  });


router.route('/register')
  .post(async (req: any, res: any) => {
    let userMatch = users.find((user: {_id: number, login: any, password: any}) => req.body.login === user.login);
   
       if (!userMatch) {
      let newUser = {
        _id: Date.now(),
        login: req.body.login,
        password: req.body.pass,
      
      }
      users.push(newUser);
      console.log(users);
      res.json({ ok: true })
    } else {
       res
      .status(400)
      .send({ error: { code: 400, message: 'Email address already used' } });
     }
   
  });

module.exports = router;

