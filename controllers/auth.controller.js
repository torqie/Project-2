const passport = require('passport');
const bcrypt = require('bcryptjs');
const db = require('../models');
require('../config/passport');

// Register
exports.register = async (req, res) => {
  const candidate = await db.User.findOne({ where: { email: req.body.email } });


  if (candidate) {
    res.json({
      success: false,
      message: 'This email is already taken. Try logging in.',
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
      req.login(user, (err) => {
        if (err) { return err; }
        res.status(201).json(user);
      });
    } catch (e) {
      console.log('error: ', e);
    }
  }
};

// Login
exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.json({ success: false }); }
    req.login(user, (err2) => {
      if (err2) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
};

// Logout
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
