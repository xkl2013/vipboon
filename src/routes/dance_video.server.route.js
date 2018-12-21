var express = require('express');
var docRouter = express.Router();
var  docController=require('../controllers/dance_video.server.controller');

docRouter.put('/getList',docController.getList);
module.exports = docRouter;