"use strict";

import { Response } from "express";
import { Request } from "express";
import bodyParser from 'body-parser';
import { constants } from "buffer";

const User = require('../models/user');
const Tasks = require('../models/tasks');
let id = 0


class controllerItems{

  
  async getItems(req: Request, res: Response) {
      try {
          console.log("GET ITEMS"+req.body);
        //const login = req.body || undefined;
        
        const user = req.session.user 
        console.log(user);
        const allTask = await Tasks.find({login: user }) || [];
        console.log(allTask)
       res.send(JSON.stringify({ items: allTask }))
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'error in getItems'})
        }
    }
    
    async addTask(req: Request, res: Response) {
      try {
        const item = new Tasks({
          login: req.session.user,
          id: id++,
          text: req.body.text,
          checked: false
        })
        console.log(item)
        await item.save();
        console.log("Метод addTask записал данные")
          
        const newTask = await Tasks.findOne(item) || [];
          console.log(newTask)

      console.log("allTask replace ")
       res.send(JSON.stringify({ id: item.id }))
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'error in postItems'})
        }
    }

    async putItems(req: Request, res: Response) {
      try {
        await Tasks.updateOne({ id: req.body.id }, { $set: { text: req.body.text, checked: req.body.checked } });
        console.log("updateOne++")
        const allTask = await Tasks.find() || [];
        console.log("allTask replace after put method")
        res.send(JSON.stringify({ items: allTask }))
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'error in getItems'})
        }
    }
     async deleteItems(req: Request, res: Response) {
       try {
        await Tasks.deleteOne({ id: req.body.id })
          const allTask = await Tasks.find()
       res.send(JSON.stringify({ ok: true }))
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'error in getItems'})
        }
    }
}

module.exports = new controllerItems();