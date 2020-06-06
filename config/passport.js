const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
},


((username, password, done) => {
  db.User.findOne({ email: username }).then((user) => {
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    done(null, user);
  }).catch((err) => done(err));
})));

module.exports = passport;
