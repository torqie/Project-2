const { ensureLoggedIn } = require('connect-ensure-login');
const db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', (req, res) => {
    res.render('index', {
      user: req.user,
      error: req.flash('error'),
    });
  });

  app.get('/user', ensureLoggedIn('/login'), (req, res) => {
    res.render('user', {
      user: req.user,
    });
  });

  // Load example page and pass in an example by id
  app.get('/example/:id', (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then((dbExample) => {
      res.render('example', {
        example: dbExample,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
