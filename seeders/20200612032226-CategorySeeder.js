module.exports = {
  up: (queryInterface, Sequelize) =>

    queryInterface.bulkInsert('categories', [
      {
        name: 'MongoDB',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'ExpressJS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'React',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'NodeJs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {}),
};
