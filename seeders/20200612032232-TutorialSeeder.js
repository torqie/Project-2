const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tutorials = [];
    for (let i = 0; i <= 20; i++) {
      const fakeTutorial = {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        categoryId: 1,
        userId: 1,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      };
      tutorials.push(fakeTutorial);
    }
    console.log(tutorials);
    queryInterface.bulkInsert('tutorials', tutorials);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tutorials', null, {}),
};
