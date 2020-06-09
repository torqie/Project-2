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
  app.post('/api/register', async (req, res) => {
    const candidate = await db.User.findOne({ where: { email: req.body.email } });

    if (candidate) {
      res.json({
        success: false,
        message: 'This email is already taken. Try another.',
      });
    } else {
      const salt = await bcrypt.genSaltSync(10);
      const { password } = await req.body;
      const user = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      });
      try {
        await user.save();
        await passport.login(user);
        res.status(201).json(user);
      } catch (e) {
        console.log('error: ', e);
      }
    }
  });
};


module.exports.register = async function (req, res) {

}
