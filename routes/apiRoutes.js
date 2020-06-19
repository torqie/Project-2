// Controllers
const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');
const categoriesController = require('../controllers/categories.controller');
const tutorialsController = require('../controllers/tutorial.controller');
const searchController = require('../controllers/search.controller');
const countsController = require('../controllers/counts.countroller');

module.exports = (app) => {
  // AUTHENTICATION ROUTES
  // =============================================================
  // Login Route
  app.post('/api/login', authController.login);
  // Logout Route
  app.get('/api/logout', authController.logout);
  // Register Route
  app.post('/api/register', authController.register);

  // USERS ROUTES
  // =============================================================
  // Get All Users
  app.get('/api/users', usersController.findAll);
  // Get A Single User
  app.get('/api/users/:id', usersController.findOne);
  // Get Tutorials by user
  app.get('/api/users/:id/tutorials', usersController.tutorialsByUser);
  // Create A User
  app.post('/api/users', usersController.create);
  // Update A User
  app.put('/api/users/:id', usersController.update);
  // Delete A User
  app.delete('/api/users/:id', usersController.delete);

  // CATEGORY ROUTES
  // =============================================================
  // Get All Categories
  app.get('/api/categories', categoriesController.findAll);
  // Get A Single Category
  app.get('/api/categories/:id', categoriesController.findOne);
  // Get Tutorials by category
  app.get('/api/categories/:id/tutorials', categoriesController.tutorialsByCategory);
  // Get Tutorials Count by category
  app.get('/api/categories/:id/tutorialCountByCategory', categoriesController.tutorialCountByCategory);
  // Create A Category
  app.post('/api/categories', categoriesController.create);
  // Update A Category
  app.put('/api/categories/:id', categoriesController.update);
  // Delete A Category
  app.delete('/api/categories/:id', categoriesController.delete);

  // TUTORIAL ROUTES
  // =============================================================
  // Get All Tutorials
  app.get('/api/tutorials', tutorialsController.findAll);

  // Get A Single Tutorial
  app.get('/api/tutorials/:id', tutorialsController.findOne);
  // Create A Tutorial
  app.post('/api/tutorials', tutorialsController.create);
  // Update A Tutorial
  app.put('/api/tutorials/:id', tutorialsController.update);
  // Delete A Tutorial
  app.delete('/api/tutorials/:id', tutorialsController.delete);
  // Add View To A Tutorial
  app.put('/api/tutorials/:id/add-view', tutorialsController.addView);


  // Get top tutorials by views
  app.get('/api/top/tutorials-by-views', tutorialsController.topTutorialsByViews);


  // COUNTS ROUTES
  // =============================================================
  // Get Views Total Count
  app.get('/api/counts/views', countsController.totalViews);
  // Get Tutorials Total Count
  app.get('/api/counts/tutorials', countsController.totalTutorials);
  // Get  Users Count
  app.get('/api/counts/users', countsController.totalUsers);

  // Mongo Tutorial Count
  app.get('/api/counts/mongo/tutorials', countsController.mongoTutorialCount);
  app.get('/api/counts/mongo/views', countsController.mongoTutorialViews);

  // Express Tutorial Count
  app.get('/api/counts/express/tutorials', countsController.expressTutorialCount);
  app.get('/api/counts/express/views', countsController.expressTutorialViews);

  // React Tutorial Count
  app.get('/api/counts/react/tutorials', countsController.reactTutorialCount);
  app.get('/api/counts/react/views', countsController.reactTutorialViews);

  // NodeJS Tutorial Count
  app.get('/api/counts/nodejs/tutorials', countsController.nodejsTutorialCount);
  app.get('/api/counts/nodejs/views', countsController.nodejsTutorialViews);

  // SEARCH ROUTES
  // =============================================================
  app.get('/api/search', searchController.search);
};
