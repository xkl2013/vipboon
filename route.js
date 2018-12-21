var express = require('express');
var docRouter = express.Router();
// wechart
docRouter.get('/wechart/bycode',require('./src/controllers/wechart_by_code'));  // 此接口用于微信模块










module.exports = docRouter;