module.exports = {
  up: (queryInterface, Sequelize) =>

    queryInterface.bulkInsert('categories', [
      {
        name: 'HTML',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'CSS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'React',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Angular',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {}),
};
