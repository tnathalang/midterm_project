const faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('choices').del()
    .then(function () {
      return Promise.all([
        knex('choices').insert(
          {
            id: 1,
            name_choice: faker.lorem.word(),
            description: faker.lorem.sentence()
          }),
        knex('choices').insert(
          {
            id: 2,
            name_choice: faker.lorem.word(),
            description: faker.lorem.sentence()
          }),
        knex('choices').insert(
          {
            id: 3,
            name_choice: faker.lorem.word(),
            description: faker.lorem.sentence()
          }),
      ]);
    });
};
