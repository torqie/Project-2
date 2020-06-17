const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) =>

    queryInterface.bulkInsert('users', [
      {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: '$2a$10$FV4cZPdlo3nDiNSZudTEgOr1Y151G/cd5s9kfXfvLSUqvObsKzMO6', // password
        // role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@test.com',
        password: '$2a$10$FV4cZPdlo3nDiNSZudTEgOr1Y151G/cd5s9kfXfvLSUqvObsKzMO6', // password
        // role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {}),
};
