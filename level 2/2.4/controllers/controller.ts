"use strict";

import { Response } from "express";
import { Request } from "express";
//import bodyParser from 'body-parser';

const User = require('../models/user');
//const Tasks = require('../models/tasks');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const secret = 'secret string to hash';

class controller{

    async register(req: Request, res: Response) {
      try {
        const { login, pass } = req.body;
        const loginMatch = await User.findOne({ login })
        if (loginMatch) {
          return res.status(400).json({ error: 'user already exists' })
        }
        
        const hashPass = bcrypt.hashSync(pass, 7);
        const user = new User({ login, password: hashPass });
        await user.save();
        req.session.user = login;
        res.setHeader('Set-Cookie', login)
        res.status(200).json({ "ok": true });
      
        } catch (error) {
        console.log(error);
        res.status(400).json({error: 'registartion error'})
        }
     }

   
    async login(req: Request, res: Response) {
      try {
        const { login, pass } = req.body;
        const userMatch = await User.findOne({ login })
        if (!userMatch) {
               return res.status(400).json({ message: 'user not found' })
        }
        const validPass = bcrypt.compareSync(pass, userMatch.password)
        if (!validPass) {
          return res.status(400).json({ error: 'user not found' });
        }
        req.session.user = login;
        const userCookie = req.session.user;
        console.log(userCookie);
        console.log('Cookie from client', req.headers['cookie'])
        
        res.setHeader('Set-Cookie', login)
        console.log('Method getCookie()', res.getHeader('Set-Cookie'))
        //res.sendFile(__dirname+'./front/index.html')



    res.json({ "ok": true });
  
        } catch (error) {
        console.log(error);
        res.status(400).json({error: 'login error'}) 
        }
    }
    
    async logout(req: Request, res: Response) {
      try {     
         req.session.user = ``;
             res.json({ ok: true })
        } catch (error) {
            
        }
     }
}

module.exports = new controller();