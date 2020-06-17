module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('tutorials', [
      {
        title: 'Something about HTML in this title',
        content: 'Something here',
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        title: 'Something about CSS in this title',
        content: 'Something here',
        categoryId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nifty CSS Trick',
        content: 'Something here',
        categoryId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tutorials', null, {}),
};
