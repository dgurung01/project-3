//app.js

var userInViews = Require('./lib/middleware/userInviews');
var authRouter = require('./routes/auth');
var indexRouter = require ('./routes/users');


//..
app.use(userInViews());
app.use('/', authRouter);
app.use('/',indexRouter);
app.use('/', usersRouter);
//..