const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = (app, passport) => {
  // Authentication Routes
  // =============================================================

  // Login Route
  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }));

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
      bcrypt.hash(req.body.password, salt, (err2, hash) => {
        if (err2) return next(err2);
        // Store the user to the database, then send the response
        const user = db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        });
        return res.json(user);
      });
    });
  });


  // Get all examples
  app.get('/api/examples', (req, res) => {
    db.Example.findAll({}).then((dbExamples) => {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post('/api/examples', (req, res) => {
    db.Example.create(req.body).then((dbExample) => {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then((dbExample) => {
      res.json(dbExample);
    });
  });
};
