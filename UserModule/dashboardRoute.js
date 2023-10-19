const { dashboardController } = require('../Controller.js/controllers')

const dashboard=require('express').Router();

dashboard.get('/dashboard',dashboardController)

module.exports=dashboard;

