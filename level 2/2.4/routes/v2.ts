import { error } from 'console';
import express from 'express';
import path from 'path';
let router = express.Router();

const controller = require('../controllers/controller');
const controllerItems = require('../controllers/controllerItems');
    

// /api/v2/router?action=login|logout|register|getItems|deleteItem|addItem|editItem
router.all('/router', function (req, res) { 
    const method = req.query.action;

    switch (method) {
        case 'login': controller.login(req, res);
            break;
        case 'register': controller.register(req, res);
            break;
        case 'getItems': controllerItems.getItems(req, res);
            break;
        case 'deleteItem': controllerItems.deleteItems(req, res);
            break;
        case 'createItem': controllerItems.addTask(req, res);
            break;
        case 'editItem': controllerItems.putItems(req, res);
            break;
        default: controller.logout(req, res);
            break;
        
    }
})



module.exports = router;