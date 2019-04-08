require('dotenv').config()
const port = process.env.port;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');
const helmet = require('helmet');

app.use(helmet());

app.use(express.urlencoded({extended:true}));



app.engine('html',es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(session({
    store: new fileStore(),
    secret: process.env.SESSION_SECRET
}));

app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})