const Router = require('express').Router;
const dashboardRoute = Router();
const dashboardGet = require('../controllers/dashboard');

dashboardRoute.get('/', dashboardGet)

module.exports = dashboardRoute