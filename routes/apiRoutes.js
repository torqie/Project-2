// Controllers
const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');
const categoriesController = require('../controllers/categories.controller');
const tutorialsController = require('../controllers/tutorial.controller');
const searchController = require('../controllers/search.controller');

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
  // Get All Categories
  app.get('/api/users', usersController.findAll);
  // Get A Single Category
  app.get('/api/users/:id', usersController.findOne);
  // Get Tutorials by category
  app.get('/api/users/:id/tutorials', usersController.tutorialsByUser);
  // Create A Category
  app.post('/api/users', usersController.create);
  // Update A Category
  app.put('/api/users/:id', usersController.update);
  // Delete A Category
  app.delete('/api/users/:id', usersController.delete);

  // CATEGORY ROUTES
  // =============================================================
  // Get All Categories
  app.get('/api/categories', categoriesController.findAll);
  // Get A Single Category
  app.get('/api/categories/:id', categoriesController.findOne);
  // Get Tutorials by category
  app.get('/api/categories/:id/tutorials', categoriesController.tutorialsByCategory);
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

  // SEARCH ROUTES
  // =============================================================
  app.get('/api/search', searchController.search);
};
