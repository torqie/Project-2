const { ensureLoggedIn } = require('connect-ensure-login');

const db = require('../models');


module.exports = function (app) {
  app.get('/', async (req, res) => {
    const topTutorials = await db.Tutorial.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['views', 'DESC'],
      ],
      include: [db.User, db.Category],
    });
    res.render('index', {
      user: req.user,
      topTutorials: topTutorials,
    });
  });

  app.get('/tutorials/create', ensureLoggedIn('/'), async (req, res) => {
    // const users = await db.User.findAll();
    const categories = await db.Category.findAll();
    res.render('tutorials/create', {
      user: req.user,
      categories,
    });
  });

  app.get('/tutorials/:id/view/', async (req, res) => {
    const tutorial = await db.Tutorial.findOne({
      where: { id: req.params.id },
      include: [db.User, db.Category],
    });
    res.render('tutorials/view', {
      user: req.user,
      tutorial: tutorial.toJSON(),
    });
  });

  app.get('/categories/:name/', async (req, res) => {
    const category = await db.Category.findOne({ where: { name: req.params.name } });
    const tutorial = await db.Tutorial.findAll({
      where: { categoryId: category.id },
      include: [db.User, db.Category],
    });
    res.render('categories/index', {
      user: req.user,
      category: req.params.name,
      tutorials: tutorial,
    });
  });
  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404', {
      user: req.user,
    });
  });
};
