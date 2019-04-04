const port = 1337;
const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const loginRouter = require('./routes/login')
const dashboardRouter = require('./routes/dashboard')

app.use(express.urlencoded({extended:true}));
app.engine('html',es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(session({
    store: new fileStore(),
    secret: "seroigj48&@#(*&@(*#UTJoigje4986chr78 gTY$W%"
}));

app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})