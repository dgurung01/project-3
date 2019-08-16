var express = require('express');
var router = express.router();
var passport = require('passport');
var dotenv = require('dotenv');
var util = require('url');
var querystring = require('querystring');

dotenv.config();

//perform the login,after login auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
}), function (req,res){
    res.redirect('/');

});
//Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', function (req, res, next) {
    if (err) {return next(err);}
    if (!user) {return res.redirect('/login'); }
    req.logIn(user, function (err) {
        if (err) { return next(err); }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || '/user');

    });
   })(req,res, next);

   //perform session logour and redirect to homepage
   router.get('/logout', (req, res) => {
       req.logout();

       var returnTo = req.protocol + '://' + req.hostname;
       var port = req.connection.localPort;
       if (port !== undefined && port !==80 && port !== 443) {
           returnTo += ':' + port;
       }
       var logoutURL = new URL(
           util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
       );
       var searchString = querystring.stringify({
           client_id: process.env.AUTH0_ClIENT_ID,
           returnTo: returnTo
       });
       logoutURL.search = searchString;

       res.redirect(logoutURl);
   });

   module.exports =router;
   