const bcrypt = require('bcryptjs');
const db = require('../models');

module.exports = (app, passport) => {
  // Authentication Routes
  // =============================================================

  // // Login Route
  // app.post('/api/login', passport.authenticate('local', {
  //   // successRedirect: '/',
  //   // failureRedirect: '/',
  //   failureFlash: true,
  // }));

  // Login Route
  app.post('/api/login', (req, res, next) => {
    console.log(req.body);
    passport.authenticate('local', (err, user, info) => {
      console.log('user: ', user);
      if (err) { return next(err); }
      if (!user) { return res.json({ success: false }); }
      req.login(user, (err2) => {
        if (err2) { return next(err); }
        return res.redirect('/');
      });
    })(req, res, next);
  });

  // Logout Route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Register Route
  app.post('/api/register', (req, res, next) => {
    // Whatever verifications and checks you need to perform here
    // eslint-disable-next-line consistent-return

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(req.body.register_password, salt, async (err2, hash) => {
        if (err2) return next(err2);
        // Store the user to the database, then send the response
        const user = await db.User.create({
          firstName: req.body.register_firstName,
          lastName: req.body.register_lastName,
          email: req.body.register_email,
          password: hash,
        });
        req.login(user, (err) => {
          if (err) { return next(err); }
          return res.redirect('/');
        });
      });
    });
  });
};
