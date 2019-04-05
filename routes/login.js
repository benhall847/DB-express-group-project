const Router = require('express').Router;

const loginRoute = Router();

const {loginPage, loginPost} = require('../controllers/login');


loginRoute.get('/', loginPage);

loginRoute.post('/', loginPost);

module.exports = loginRoute;
