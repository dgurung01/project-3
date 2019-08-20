//app.js
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0 ({domain; 'dev-m61n6cja.auth0.com',clientId: 'x46Cof5u3atFPlJDuSFOf0JxrWvdrBX5'})
var userInViews = Require('./lib/middleware/userInviews');
var authRouter = require('./routes/auth');
var indexRouter = require ('./routes/users');


//..
app.use(userInViews());
app.use('/', authRouter);
app.use('/',indexRouter);
app.use('/', usersRouter);
//..

auth0
    .webAuth
    .authorize({scope: 'openid profile email', audience: 'https://dev-m61n6cja.auth0.com/userinfo'})
    .then(credentials =>
        console.log(credentials)
        //successfully authenticated
        //store the accesstoken
        )

        .catch(error => console.log(error));