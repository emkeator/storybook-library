require('dotenv').config(); //gets your .env file

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      app = express(),
      port = 3005;

      
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false
}));
//IMPORTANT!!!!!!!!
app.use(passport.initialize());
app.use(passport.session());
//we would have app.use(express.static etc to deploy!)

//we would have massive connection to database here

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile);
    done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

//app.get('/auth/me');

//kicks off process and redirects to auth 0
app.get('/auth', passport.authenticate('auth0'));

//will get us back once we're authenticated or not
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/shelf',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/');
})


app.listen(port, () => console.log(`I'm listening on port ${port}`));