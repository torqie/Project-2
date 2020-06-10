// Controllers
const authController = require('../controllers/auth.controller');

module.exports = (app) => {
  // Authentication Routes
  // =============================================================
  // Login Route
  app.post('/api/login', authController.login);

  // Logout Route
  app.get('/api/logout', authController.logout);

  // Register Route
  app.post('/api/register', authController.register);
};
