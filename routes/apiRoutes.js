const db = require('../models');

module.exports = (app, passport) => {
  // Authentication Routes
  // =============================================================

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
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
