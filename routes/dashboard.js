const Router = require('express').Router;
const dashboardRoute = Router();
const { dashboardGet, dashboardUpdate } = require('../controllers/dashboard');
const Item = require('../models/items');


dashboardRoute.get('/', dashboardGet);
dashboardRoute.post('/:id', dashboardUpdate);


module.exports = dashboardRoute;