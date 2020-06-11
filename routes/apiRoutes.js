// Controllers
const authController = require('../controllers/auth.controller');
const tutorialsController = require('../controllers/tutorial.controller');

module.exports = (app) => {
  // AUTHENTICATION ROUTES
  // =============================================================
  // Login Route
  app.post('/api/login', authController.login);
  // Logout Route
  app.get('/api/logout', authController.logout);
  // Register Route
  app.post('/api/register', authController.register);

  // TUTORIAL ROUTES
  // =============================================================
  // Get All Tutorials
  app.get('/api/tutorials', tutorialsController.findAll);
  // Get A Single Tutorial
  app.get('/api/tutorials/:id', tutorialsController.findOne);
  // Create A Tutorial
  app.post('/api/tutorials', tutorialsController.create);
  // Update A Tutorial
  app.get('/api/tutorials', tutorialsController.update);
  // Delete A Tutorial
  app.get('/api/tutorials', tutorialsController.findAll());
};
