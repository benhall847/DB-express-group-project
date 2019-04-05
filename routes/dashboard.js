const Router = require('express').Router;
const dashboardRoute = Router();
const { dashboardGet, dashboardUpdate, dashboardClaimed } = require('../controllers/dashboard');
const Item = require('../models/items');


dashboardRoute.get('/', dashboardGet);
dashboardRoute.get('/claimed', dashboardClaimed);
dashboardRoute.post('/', dashboardUpdate);

dashboardRoute.post('/:id', dashboardUpdate);



module.exports = dashboardRoute;